// After revision, try to create one state which has true & false value,
// if the value is true then you will show full name else full name will be hidden.
// Also, it consist a button to toggle the true/false value.

import React, {useState} from 'react'

function Assignment1() {

    const [buttonText, setButtonText] = useState('Hide full Name');
    const [isDisplay, setIsDisplay] = useState(true);

    const personDetails = {
        firstName: 'John',
        lastName: 'Doe'
    }


    const displayName = () => {

        if (isDisplay) {
            setButtonText('Display full Name');
            setIsDisplay(false);
        } else {
            setButtonText('Hide full Name');
            setIsDisplay(true);
        }
    }


  return (
    <div>
        <h2>Assignment</h2>

        <button onClick={displayName}>
            {buttonText}
        </button>
        <br /><br />

        {isDisplay && <div>{personDetails.firstName} {personDetails.lastName}</div>}
    </div>
  )
}

export default Assignment1
