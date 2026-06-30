import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

/** Canonical project display order, shared across the home, work, and related lists */
export const PROJECT_ORDER = [
  "gaussian-splatting-accident-scene-reconstruction",
  "vision-only-autonomous-target-search-navigation",
  "high-performance-3d-rendering-accelerator",
  "tetris-battle-agent-q-learning",
];

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
  /** Number of columns to display projects in (defaults to a single column) */
  columns?: "1" | "2";
  /** Explicit slug order; any project not listed falls back after, sorted by date */
  order?: string[];
}

export function Projects({ range, exclude, columns = "1", order = PROJECT_ORDER }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    if (order && order.length > 0) {
      const rank = (slug: string) => {
        const index = order.indexOf(slug);
        return index === -1 ? Number.MAX_SAFE_INTEGER : index;
      };
      const diff = rank(a.slug) - rank(b.slug);
      if (diff !== 0) return diff;
    }
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Grid
      columns={columns}
      s={{ columns: 1 }}
      fillWidth
      marginBottom="40"
      paddingX="l"
      gap={columns === "2" ? "l" : "xl"}
    >
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          direction={columns === "2" ? "column" : undefined}
        />
      ))}
    </Grid>
  );
}
