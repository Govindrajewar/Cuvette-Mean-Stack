import React, { useState } from 'react'

function Forms() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [error, setError] = useState({
        name: false,
        email: false,
        phone: false
    });

    const submitHandler = (e) => {
        e.preventDefault();

        if(!name){
            setError( (prevState) => {
                return {
                    ...prevState,
                    name: true
                }
            })
        }

        if(!email){
            setError( (prevState) => {
                return {
                    ...prevState,
                    email: true
                }
            })
        }

        if(!phone){
            setError( (prevState) => {
                return {
                    ...prevState,
                    phone: true
                }
            })
        }

        const userDetails = {
            name,
            email,
            phone
        }

        console.log(userDetails);

    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Form</h1>
        <input
        type="text"
        placeholder='Enter your name'
        name='name'
        value={name}
        onInput={(e) => setName(e.target.value)}
        />
        <br />
        {error.name && <p style={{color: 'red'}}>Please, Enter valid name</p>}
        <br />

        <input
        type="text"
        placeholder='Enter your email'
        email='email'
        value={email}
        onInput={(e) => setEmail(e.target.value)}
        />
        <br />
        {error.email && <p style={{color: 'red'}}>Please, Enter valid email</p>}
        <br />

        <input
        type="text"
        placeholder='Enter your phone number'
        phone='phone'
        value={phone}
        onInput={(e) => setPhone(e.target.value)}
        />
        <br />
        {error.phone && <p style={{color: 'red'}}>Please, Enter valid phone number</p>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Forms
