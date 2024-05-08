import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

function GrandChild2() {
  const count = useSelector(store => store.count);

  const increment = () => {
    return {
      type: 'INCREMENT'
    }
  }

  const dispatch = useDispatch();

  return (
    <div style={{flex: 1, border: '1px dashed red', margin: '10px'}}>
      <h1>GrandChild2</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=> dispatch(increment())}>Increment</button>
    </div>
  )
}

export default GrandChild2
