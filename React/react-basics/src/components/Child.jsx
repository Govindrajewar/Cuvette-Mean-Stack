import React from 'react'

function Child(props) {
  return (
    <div>
        {/* Props */}
        <ul type='none'>
            <li>First Name: {props.studentDetails.firstName}</li>
            <li>Last Name: {props.studentDetails.lastName}</li>
        </ul>
    </div>
  )
}

export default Child
