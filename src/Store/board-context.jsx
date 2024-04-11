import { createContext } from "react";

const BoardContext = createContext({
  activeToolItem: "",
  toolActionType: "",
  elements: [],
  boardMouseDownHandler: () => {},
  boardMouseMoveHandler: () => {},
  boardMouseUpHandler: () => {},
  changeToolHandler: () => {},
});

export default BoardContext;
