import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import {
  Environment,
  OrbitControls,
  ScrollControls,
} from "@react-three/drei";

const Scene = ({click}) => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 20 }} flat>
      <color attach="background" args={["#e3e3e3"]} />
      {/* <ScrollControls pages={2}> */}
        <Experience click={click} />
      {/* </ScrollControls> */}
      {/* <OrbitControls enableZoom={false}  /> */}
      <Environment
        files={
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr"
        }
      />
    </Canvas>
  );
};

export default Scene;
