import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

import {Provider} from 'react-redux';
import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ border: "2px slide black" }}>
        <h1>APP</h1>
        <div style={{ display: "flex" }}>
          <Child1 />
          <Child2 />
        </div>
      </div>
    </Provider>
  );
}

export default App;
