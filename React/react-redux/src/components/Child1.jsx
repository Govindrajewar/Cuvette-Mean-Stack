import React from "react";
import GrandChild1 from "./GrandChild1";
import GrandChild2 from "./GrandChild2";

function Child1() {
  return (
    <div style={{flex: 1, border: '1px dashed black', margin: '10px'}}>
      <h1>Child1</h1>
      <div style={{ display: "flex"}}>
        <GrandChild1 />
        <GrandChild2 />
      </div>
    </div>
  );
}

export default Child1;
