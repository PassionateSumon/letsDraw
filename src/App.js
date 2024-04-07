import React from "react";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import BoardProvider from "./Store/boardProvider";

const App = () => {
  return (
    <BoardProvider>
      <Board /> 
      <Toolbar />
    </BoardProvider>
  );
};

export default App;
