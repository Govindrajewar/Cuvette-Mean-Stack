import React from 'react'
import moment from 'moment'

function Moment() {

    const date = new Date();
    console.log(date);

  return (
    <div>
        <p>Today: {moment().format("DD-MM-YYYY")} </p>
    </div>
  )
}

export default Moment
