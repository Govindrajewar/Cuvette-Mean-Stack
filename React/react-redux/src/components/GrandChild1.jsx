import React from 'react'
import { useDispatch } from 'react-redux'

function GrandChild1() {

  const decrement = () => {
    return {
      type: 'DECREMENT'
    }
  }

  const dispatch = useDispatch();

  return (
    <div style={{flex: 1, border: '1px dashed red', margin: '10px' }}>
      <h1>GrandChild1</h1>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default GrandChild1
