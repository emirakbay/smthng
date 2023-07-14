"use client";
import React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Rainbow } from "./components/rainbox";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <Canvas>
          <color attach="background" args={["#000"]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Scene />
        </Canvas>
      </div>
    </>
  );
};

function Scene() {
  const ref = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();
  useFrame((state, delta) => (ref.current.rotation.z += delta / 2.5));
  useFrame((state, delta) => (ref2.current.rotation.z += delta / 2.75));
  useFrame((state, delta) => (ref3.current.rotation.z += delta / 3));
  useFrame((state, delta) => (ref4.current.rotation.z += delta / 3.25));
  return (
    <>
      <Rainbow ref={ref} />
      <Rainbow ref={ref2} />
      <Rainbow ref={ref3} />
      <Rainbow ref={ref4} />
    </>
  );
}

Home.displayName = "smthng";
export default Home;
