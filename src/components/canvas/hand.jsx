import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useGLTF, useAnimations } from "@react-three/drei";
import { extend } from "@react-three/fiber";

extend({ Html });

const Hand = () => {
    const hand = useGLTF("./Hand_w/scene.gltf");
    const { actions } = useAnimations(hand.animations, hand.scene);
    
    const ref = useRef();
  
    const handleClick = () => {
      actions.play("rotate"); // Replace "animationName" with the actual name of your animation
    };
  
    return (
      <mesh ref={ref} onClick={handleClick}>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          intensity={1}
          castShadow
          // shadow-mapSize={1024}
        />
  
        <primitive
          object={hand.scene}
          scale={1.55}
          position={[-1, -3.9, 1.25]}
          rotation={[0.01, 0.2, 0]}
          onClick={handleClick}
        />
      </mesh>
    );
  };
  

const HandCanvas = () => {
  return (
    <React.StrictMode>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Hand />
          <Html>
            <div></div>
          </Html>
        </Suspense>
        <Preload all />
      </Canvas>
    </React.StrictMode>
  );
};

export default HandCanvas;
