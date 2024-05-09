import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((store) => store.todos);

  return (
    <div>
      {todos.map((todo, index) => {
        return <Todo todo={todo} key={index} todoIndex={index}/>;
      })}
    </div>
  );
}

export default Todos;
