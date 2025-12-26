import React from "react";
import "./index.css";
import Canvas from "./Canvas";

function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-black text-white">
        <Canvas />
        <Canvas />
        <Canvas />
        <Canvas />
        <Canvas />
      </div>
    </>
  );
}
export default App;
