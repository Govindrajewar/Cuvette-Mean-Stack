import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  const count = useSelector(store => store.count);
  
  return (
    <div style={{ flex: 1 , border: '1px dashed black', margin: '10px'}}>
      <h1>Child2</h1>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default Child2;
