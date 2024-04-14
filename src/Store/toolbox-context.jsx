import { createContext } from "react";

const toolboxContext = createContext({
  toolboxState: {},
  changeStroke: () => {},
});

export default toolboxContext;
