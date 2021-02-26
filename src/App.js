import './App.css';

import Canvas from "./components/canvas";

function App() {
  return (
    <div style={{ height: "100%", textAlign: "center", backgroundColor: "black" }}>
      <p style={{ width: "100%", position: "absolute", color: "white" }}>The Ultimate Playbook</p>
      <Canvas />
    </div>
  );
}

export default App;
