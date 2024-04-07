import { useContext, useEffect, useRef } from "react";
import rough from "roughjs";
import BoardContext from "../../Store/board-context";

function Board() {
  const canvasRef = useRef();
  const { elements, boardMouseDownHandler } = useContext(BoardContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const roughCanvas = rough.canvas(canvas);
    elements.forEach((element) => {
      roughCanvas.draw(element.roughEle);
    });

    return () => {
      context.clearRect(0,0, canvas.height, canvas.width);
    };

  }, [elements]);

  const handleBoardMouseDown = (event) => {
    boardMouseDownHandler(event);
  };

  return <canvas ref={canvasRef} onMouseDown={handleBoardMouseDown} />;
}

export default Board;
