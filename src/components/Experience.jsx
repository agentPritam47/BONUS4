import React, { useRef } from "react";
import { Watch } from "./Watch";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";

const Experience = ({click}) => {
  const watch = useRef();
  const { scrollYProgress } = useScroll();
  const scl = Math.max(window.innerWidth / 7500, 0.15);
  let pos = 0
  let rot = 2
  if (window.innerWidth > 900){
    pos = 0
    rot = 2
  } else {
    pos = -0.1
    rot = 1.92
  }
  useFrame(() => {
    const scrollValue = scrollYProgress.get(); 
    // console.log(scrollValue);

    watch.current.rotation.x = Math.PI / 2 - scrollValue * Math.PI/3;
    watch.current.rotation.y = Math.PI*2  - scrollValue * Math.PI/rot;
    watch.current.position.y = pos - scrollValue *.1 ;
  });

  return (
    <>
      <group ref={watch}>
        <Watch scale={scl} click={click}  />
      </group>
    </>
  );
};

export default Experience;
