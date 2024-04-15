import { createContext } from "react";

const toolboxContext = createContext({
  toolboxState: {},
  changeStroke: () => {},
  changeFill: () => {},
});

export default toolboxContext;
