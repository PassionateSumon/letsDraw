import { createContext } from "react";

const BoardContext = createContext({
  activeToolItem: "",
  toolActionType: "",
  elements: [],
  history: [[]],
  index: 0,
  boardMouseDownHandler: () => {},
  boardMouseMoveHandler: () => {},
  boardMouseUpHandler: () => {},
  changeToolHandler: () => {},
  textAreaBlurHandler: () => {},
  undo: () => {},
  redo: () => {},
});

export default BoardContext;
