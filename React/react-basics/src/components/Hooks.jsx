import React, {useState} from 'react'

function Hooks() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 20px',
        margin: '8px',
        borderRadius: '4px',
        cursor: 'pointer'
    }


  return (
    <div>
        Count: {count}
        <button style={buttonStyle} onClick={increment}>Increment</button>
        <button style={buttonStyle} onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Hooks
