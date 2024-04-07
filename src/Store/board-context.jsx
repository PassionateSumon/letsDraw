import { createContext } from "react";

const BoardContext = createContext({
  activeToolItem: "",
  elements: [],
  boardMouseDownHandler: () => {},
  handleToolItem: () => {},
});

export default BoardContext;
