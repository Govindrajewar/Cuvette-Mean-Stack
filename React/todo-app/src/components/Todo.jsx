import React from "react";
import { useDispatch } from "react-redux";

import { removeTodo } from "../actions/todo";

function Todo({ todo, todoIndex }) {
  const styleTodo = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
    textAlign: "start",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    button: {
      backgroundColor: "black",
      color: "white",
      padding: "10px",
      cursor: "pointer",
    },
  };


  const dispatch = useDispatch();

  return (
    <div style={styleTodo}>
      <div>{todo}</div>
      <button style={styleTodo.button}
      onClick={()=> dispatch(removeTodo(todoIndex))}
      >X</button>
    </div>
  );
}

export default Todo;
