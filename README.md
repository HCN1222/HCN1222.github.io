The projects listed below represent my most significant work. Each project includes direct links to demos and repositories, and I encourage the committee to explore them for a clearer view. For additional projects mentioned in my résumé, please visit my [GitHub main page](https://github.com/HCN1222):

Each repository is accompanied by a clearly written README.

# RESEARCH PROJECTS
## _Accident Scene Optimization: Enhanced Scene Scanning with Gaussian Splatting for Swift Vehicle Clearance_

A novel reconstruction pipeline using specialized Gaussian Splatting to improve scene completeness on reflective vehicles.

- [Demo Video](https://youtu.be/3oCs9Vac0BQ)

- [GitHub Repository (Specialized Gaussian Splatting)](https://github.com/HCN1222/2DGS-DR)
<details>
  <summary><b>Quick Demo</b></summary>

  ![Teaser](https://raw.githubusercontent.com/HCN1222/2DGS-DR/main/images/teaser.png)
  This project aims at improving the mesh extraction of 2D Gaussian Splatting by adding a deferred reflection step.
  
  ![Comparison](https://raw.githubusercontent.com/HCN1222/2DGS-DR/main/images/2DDR_vs_2DGS.png)
  Comparison between 2D Gaussian Splatting with Deferred Reflection (ours) and 2D Gaussian Splatting. The left image is the result of 2D Gaussian Splatting with Deferred Reflection, and the right image is the result of 2D Gaussian Splatting. The right image has better mesh extraction.
</details>

## _High-Performance 3D Rendering Accelerator for IC Design Applications_

A hardware design capable of rendering colored triangular meshes with up to 1,048,576 faces and vertices at 144 fps, implemented through a full ASIC design flow.

- [GitHub Repository](https://github.com/HCN1222/3D-rendering-accelerator)

<details>
  <summary><b>Quick Demo</b></summary>
  
  <br/>

  ![Teasor](https://raw.githubusercontent.com/HCN1222/3D-rendering-accelerator/main/images/teasor.png)

  This is the final projecct for the course IC design laboratory in National Tsing-Hua University. Our design supports rendering colored triangular mesh with up to 1048576 faces and vertices in 144 fps.
  
  ### Specification
  
  #### Synthesis
  
  - Clock period: 8.0ns  
  Note that the input and the output delay is 50% of the clock period.
  - Area: 1359960 um^2
  
  #### APR
  - Clock period: 10.0ns
  - Area: 1600084 um^2
  - Utilization: 85%(1359960/1600084)
  - Chip Layout  
  ![image](https://raw.githubusercontent.com/HCN1222/3D-rendering-accelerator/main/images/chip_layout.png)
  - IR drop  
  ![image](https://raw.githubusercontent.com/HCN1222/3D-rendering-accelerator/main/images/IR_drop.png)
  - Power  
  
  | Power Component        | Pre Layout     | Post Layout (Pre-sim waveform) | Post Layout (Post-sim waveform) |
  |------------------------|----------------|---------------------------------|----------------------------------|
  | Net Switching Power    | 7.244       mW | 0.0115 W                       | 0.0174 W                        |
  | Cell Internal Power    | 0.0372 W       | 0.0228 W                       | 0.0365 W                        |
  | Total Power            | 0.0445 W       | 0.0343 W                       | 0.0539 W                        |
  
  #### Input
  
  - **Camera**  
      - `eyeX`, `eyeY`, `eyeZ`: The position of the camera. _24-bits signed fixed point, 4Q20._
      - `centerX`, `centerY`, `centerZ`: The center of the camera screen.  _24-bits signed fixed point, 4Q20._
      - `upX`, `upY`, `upZ`: The Up direction of the camera. _24-bits signed fixed point, 4Q20._
      - `input_valid`: Indicates if the input data is valid. _1-bit._
  
  #### Output
      
  Stores the result into sram ( screen buffer (1280*720) ).
  For the address of the screen buffer sram, each address contains 16 banks.
  The output format of the pixel is in RGB. _24-bits unsigned fixed point each, packed._ _72-bits_ in total.
  
  - `FINISH`: Indicates the end of rendering.
  
  #### Sram
  
  - **Vertices**   
      - `vertex`: The world space coordinate of the mesh (x, y, z) in _24-bits signed fixed point, 4Q20_, packed. _72-bits_ in total.
  
  - **Face**  
      - `vertex1`, `vertiex2`, `vertiex3`: Records the addresses of the vertices that the face is composed of.
      
  - **Color**  
      - `color`: RGB of the vertex. _24-bits unsigned fixed point each, packed._ _72-bits_ in total.
  
  - **Depth Buffer**
      - `Depth`: The depth in NDC space, used to determined whether the pixel should be drawn or not. _signed 21-bit fixed point, 2Q19_

  
</details>

## _Tetris Battle Agent Trained with Q-learning_
A reinforcement-learning agent trained with Q-learning for competitive gameplay.

-[GitHub Repository](https://github.com/HCN1222/Tetris-battle-with-Q-learning)

<details>
  <summary><b>Quick Demo</b></summary>

  <br/>

  | **Single Player Mode** | **Two Players Mode** |
  |------------------------|-----------------------|
  | **Functions:** back to back, tetris, combo. | **Functions:** back to back, tetris, combo, KO.<br/>Left / Right: Ours / Others |
  | ![Single player demo](https://raw.githubusercontent.com/HCN1222/Tetris-battle-with-Q-learning/main/imgs/single_demo.gif) | ![Two players demo](https://raw.githubusercontent.com/HCN1222/Tetris-battle-with-Q-learning/main/imgs/double_demo.gif) |

</details>
