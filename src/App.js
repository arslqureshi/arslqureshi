import { render } from "react-dom";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { useProgress, Html } from "@react-three/drei";
import Hero from "./components/Hero";
import "./App.css";
function App() {
  return (
    <div className="content">
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
        <color attach="background" args={["#000"]} />
        <Suspense fallback={<Loader />}>
          <Hero></Hero>
        </Suspense>
        <ambientLight intensity={0.4} />
      </Canvas>
    </div>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "#FFFFFF" }}>{progress} % loaded</span>
    </Html>
  );
}

export default App;
