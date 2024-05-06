import React from 'react'

function HOC( { component: Component}) {

    const hoc = {
        backgroundColor: 'yellow',
        color: 'blue',
        padding: '10px',
        margin: '10px',
        borderRadius: '4px'
    }


  return (
    <div style={hoc}>
        <h1>HOC</h1>
        <Component />


    </div>
  )
}

export default HOC
