import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Cheng-Ning",
  lastName: "Huang",
  name: `Cheng-Ning Huang`,
  role: "Robotics & Computer Vision Engineer",
  avatar: "/images/avatar.jpg",
  email: "chengnih@andrew.cmu.edu",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Mandarin"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on robotics, 3D vision, and systems engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/HCN1222",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anderlinhuang",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio of ${person.name}, a ${person.role.toLowerCase()}`,
  headline: <>Engineering perception and 3D understanding for robots</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Vision-Only Navigation</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/vision-only-autonomous-target-search-navigation",
  },
  subline: (
    <>
      I'm {person.firstName}, an incoming M.S. student in Robotic Systems Development at{" "}
      <Text as="span" size="xl" weight="strong">Carnegie Mellon</Text>. I work on 3D
      reconstruction, computer vision, and the systems that bring robots to life.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Cheng-Ning is a robotics and computer vision engineer with a background in
        electrical engineering and computer science. His work spans 3D reconstruction with
        Gaussian Splatting, vision-only autonomous navigation, and hardware-accelerated 3D
        graphics — bridging deep learning research with real-time systems and silicon.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Microsoft (Bing Maps Geocoding Team)",
        timeframe: "Jul 2024 – Jun 2025",
        role: "Research Development Intern, FY2025",
        achievements: [
          <>
            Worked within the Bing Maps Geocoding team on the four-stage geospatial search
            pipeline.
          </>,
          <>
            Identified and resolved a duplication bug by deduplicating interpolated address
            results, achieving an 11% performance improvement on the targeted query dataset
            for Ireland.
          </>,
          <>
            Enhanced the internal BingGC debugging tool with region-specific configuration,
            enabling selective activation of custom testing arguments for targeted regions.
          </>,
          <>
            Conducted exploratory data analysis on USA query response data using Python
            (Pandas), surfaced critical issues, and delivered immediate hotfixes.
          </>,
        ],
        images: [],
      },
      {
        company: "National Tsing Hua University – CV Lab",
        timeframe: "Feb 2024 – Jan 2025",
        role: "Research Assistant (Advisor: Dr. Shang-Hong Lai)",
        achievements: [
          <>
            Applied 2D Gaussian disks in place of traditional 3D blobs to improve 3D mesh
            reconstruction accuracy, enabling precise inter-object distance measurement in
            complex accident scenes.
          </>,
          <>
            Extended backpropagation to jointly train surface normals and environment maps,
            reducing reflection-related artifacts in real-world car scenes.
          </>,
          <>
            Enabled pre-clearance vehicle removal via advanced scene scanning, cutting public
            wait times at accident sites from over 30 minutes to under 10, with reconstructed
            distances within 10% of ground truth.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Carnegie Mellon University",
        description: (
          <>M.S. in Robotic Systems Development, School of Computer Science (Aug 2026 – Dec 2027).</>
        ),
      },
      {
        name: "National Tsing Hua University",
        description: (
          <>B.S. in Electrical Engineering and Computer Science (Sep 2021 – Jun 2025).</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "3D Reconstruction & Graphics",
        description: (
          <>
            Gaussian Splatting, 3D mesh reconstruction, surface-normal and environment-map
            estimation, and real-time 3D rendering.
          </>
        ),
        tags: [
          { name: "PyTorch", icon: "pytorch" },
          { name: "OpenCV", icon: "opencv" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Robotics & Computer Vision",
        description: (
          <>
            ROS-based autonomous navigation and monocular vision-only target search, plus
            deep-learning model design and training.
          </>
        ),
        tags: [
          { name: "ROS", icon: "ros" },
          { name: "Python", icon: "python" },
          { name: "C++", icon: "cplusplus" },
        ],
        images: [],
      },
      {
        title: "Systems & IC Design",
        description: (
          <>
            ASIC-based 3D rendering accelerator from RTL through post-synthesis,
            place-and-route, and post-layout simulation.
          </>
        ),
        tags: [
          { name: "Verilog" },
          { name: "C" },
          { name: "Matlab" },
        ],
        images: [],
      },
      {
        title: "Programming Languages",
        description: <>C, C++, C#, Python, SQL, Matlab, Verilog.</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about robotics and vision...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Robotics, vision, and systems projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
