"use client"

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

useGLTF.preload("/assets/porsche_911.glb");

function CarModel() {
  const gltf = useGLTF("/assets/2019_mclaren_600lt.glb");
  console.log("GLTF Scene:", gltf.scene);
  return <primitive object={gltf.scene} scale={450} position={[0, -1, -2]} />;
}

export default function CarModelViewer() {
  return (
    <Canvas style={{ height: "100%", width: "100%"}}
    camera={{ position: [20, 5, 25], fov: 30 }}>
        
        <ambientLight intensity={0.5} />
        <hemisphereLight args={["white", "gray", 1.2]} />
        <directionalLight
        position={[10, 10, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        />
        <directionalLight
        position={[-10, 10, -10]}
        intensity={0.7}
        />

      <Suspense fallback={null}>
        <CarModel />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />

      </Suspense>
      
    </Canvas>
  );
}