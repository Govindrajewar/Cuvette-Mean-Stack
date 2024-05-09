import { ADD_TODO, REMOVE_TODO } from '../actions/todo'

const initialState = {
  todos: [
    "Drink 5 litre water daily",
    "Eat 500 gm of rice daily",
    "Do 100 push-ups daily"
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      let newTodo = state.todos.filter(
        (todo, index) => index !== action.payload
      );
      return {
        ...state,
        todos: newTodo,
      };
    default:
      return state;
  }
};

export default reducer;
