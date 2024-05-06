import React, { useEffect, useState } from 'react'

function Component1() {

    const [count, setCount] = useState(0);


    useEffect( () => {
        console.log('Component1 Mounted');
        }, [])

    useEffect( () => {
        console.log('Component1 Updated');
    }, [count])

    useEffect( () => {
        return () => {
            console.log('Component1 UnMounted');
        }
    })

  return (
    <div>
      <h1>Component1</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>

    </div>
  )
}

export default Component1
