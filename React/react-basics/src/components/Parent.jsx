import React from 'react'
import Child from './Child'


function Parent() {

    let sachinDetails = {
        firstName: 'Sachin',
        lastName: 'Tendulkar'
    }

    let saraDetails = {
        firstName: 'Sara',
        lastName: 'Ali'
    }

  return (
    <div>
        {sachinDetails.firstName}
        <Child studentDetails={sachinDetails}/>
        <Child studentDetails={saraDetails}/>
    </div>
  )
}

export default Parent
