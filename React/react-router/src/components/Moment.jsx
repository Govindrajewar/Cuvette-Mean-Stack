import React from 'react'
import moment from 'moment'

function Moment() {

    const date = new Date();
    console.log(date);

    const time = moment(date, "DD-MM-YYYY").fromNow();




  return (
    <div>
        <p>Today: {moment().format("DD-MM-YYYY")} </p>
        <p>{time}</p>
    </div>
  )
}

export default Moment
