import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import { Provider } from "react-redux";
import store from "../src/store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
