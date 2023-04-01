import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";
// import { Html } from "@react-three/drei";

extend({ Html });

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.25]}
        rotation={[-0.01, -0.2, -0.07]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
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
          <Computers />
          <Html>
            <div></div>
          </Html>
        </Suspense>
        <Preload all />
      </Canvas>
    </React.StrictMode>
  );
};

export default ComputersCanvas;
