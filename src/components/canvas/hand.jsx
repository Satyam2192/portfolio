import { React, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Hand = () => {
  const hand = useGLTF("./Hand_w/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      position={[-20,50,10]}
      angle={0.12}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />

      <primitive object={hand.scene} 
      scale={0.95}
      position={[0,-1.25,-0.85]}
      rotation={[-0.01,-0.2,-0.07]}
      />
    </mesh>
  )
}


const HandCanvas = () => {
  return (
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
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HandCanvas;
