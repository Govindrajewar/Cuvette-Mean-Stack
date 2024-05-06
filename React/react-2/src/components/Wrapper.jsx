import React from 'react'

function Wrapper( props ) {

    const wrapper = {
        backgroundColor:'red',
        margin: '10px',
        padding: '10px'
    }

  return (
    <div style={wrapper}>
        {props.children}
    </div>
  )
}

export default Wrapper
