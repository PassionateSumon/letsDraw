import React, { useReducer } from "react";
import boardContext from "./board-context";
import { TOOL_ITEMS } from "../constants";
import rough from "roughjs/bin/rough";

const gen = rough.generator();
const boardReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TOOL":
      return {
        ...state,
        activeToolItem: action.payload.tool,
      };
    case "DRAW_DOWN":
      const {clientX, clientY} = action.payload;
      const newEle = {
        id: state.elements.length,
        x1: clientX, 
        y1: clientY,
        x2: clientX,
        y2: clientY,
        roughEle: gen.line(clientX, clientY, clientX, clientY),
      };
      const prevEle = state.elements;

      return {
        ...state,
        elements: [...prevEle, newEle],
      };
    default:
      return state;
  }
};

const initialBoardState = {
  activeToolItem: TOOL_ITEMS.LINE,
  elements: [],
};

const BoardProvider = ({ children }) => {
  const [boardState, dispatchBoardAction] = useReducer(
    boardReducer,
    initialBoardState
  );

  const handleToolItem = (tool) => {
    dispatchBoardAction({
      type: "CHANGE_TOOL",
      payload: {
        tool,
      },
    });
  };

  const boardMouseDownHandler = (event) => {
    const { clientX, clientY } = event;
    dispatchBoardAction({ 
      type: "DRAW_DOWN",
      payload: {
        clientX,
        clientY,
      }
    });
  };

  const boardContextValue = {
    activeToolItem: boardState.activeToolItem,
    elements: boardState.elements,
    handleToolItem,
    boardMouseDownHandler,
  };

  return (
    <boardContext.Provider value={boardContextValue}>
      {children}
    </boardContext.Provider>
  );
};

export default BoardProvider;
