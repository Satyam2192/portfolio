import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, BufferAttribute } from "three";

const AmoebaCanvas = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    const geometry = ref.current.geometry;
    const position = geometry.attributes.position;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z = position.getZ(i);

      const noise = Math.sin(x * 10 + time) * Math.cos(y * 10 + time) * Math.sin(z * 10 + time) * 0.1;

      position.setXYZ(i, x + noise, y + noise, z + noise);
    }

    position.needsUpdate = true;
  });

  const geometry = new BufferGeometry();
  const vertices = [];

  const segments = 64;
  const radius = 1;

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    vertices.push(x, y, 0);
  }

  geometry.setAttribute("position", new BufferAttribute(new Float32Array(vertices), 3));

  return (
    <mesh ref={ref}>
      <bufferGeometry attach="geometry" {...geometry} />
      <meshBasicMaterial attach="material" color="#ffffff" />
    </mesh>
  );
};

export default AmoebaCanvas;