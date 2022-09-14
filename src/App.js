import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { useProgress, Html } from "@react-three/drei";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="home">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />
            <DisplayHero />
          </Route>
          <Route exact path="/projects">
            <Nav />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function DisplayHero() {
  return (
    <div className="content">
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 5], fov: 70 }}>
        <color attach="background" args={["#eae4de"]} />
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
