export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const removeTodo = (todoIndex) => {
  return {
    type: REMOVE_TODO,
    payload: todoIndex,
  };
};
