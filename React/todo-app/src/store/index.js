import { createStore } from "redux";

import reducer from "../reducers/todo";

const store = createStore(reducer);

export default store;
