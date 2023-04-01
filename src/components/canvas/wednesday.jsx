import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Html } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";
// import { Html } from "@react-three/drei";

extend({ Html });

const Wednesday = () => {
  const Wednesday = useGLTF("./wdnesday_adams/scene.gltf");
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
        object={Wednesday.scene}
        scale={0.129}
        position={[0, -4.9, -1.25]}
        rotation={[-0.01, -0.2, -0]}
      />
    </mesh>
  );
};

const WednesdayCanvas = () => {
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
          <Wednesday />
          <Html>
            <div></div>
          </Html>
        </Suspense>
        <Preload all />
      </Canvas>
    </React.StrictMode>
  );
};

export default WednesdayCanvas;
