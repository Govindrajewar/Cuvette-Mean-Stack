import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../actions/todo";

function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");

    if (newTodo === "") {
      alert("Please enter valid todo task");
      return;
    }

    dispatch(addTodo(newTodo));
  };

  const styles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",

    input: {
      padding: "10px",
      fontSize: "16px",
      width: "80%",
      border: "none",
      border: "1px solid black",
    },

    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "black",
      color: "white",
      cursor: "pointer",
    },
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div style={styles}>
          <input
            type="text"
            name="todo"
            placeholder="Add todo task..."
            value={newTodo}
            onInput={(e) => setNewTodo(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
