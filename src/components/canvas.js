import { useEffect } from "react";

import paperManager from "../paper-manager";

const Canvas = () => {

  const elementId = "paper-canvas";

  useEffect(() => {
  }, []);

  return (
    <canvas
      id={elementId}
      resize="true"
      style={{
        height: "600px",
        width: "500px",
        backgroundColor: 'green',
        margin: "50px",
        border: "5px solid white",
        borderRadius: "10px"
      }}
    />
  );
}

export default Canvas;
