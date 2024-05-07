import React from 'react'

function Contact() {

  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    padding: '10px',
    borderRadius: '4px',
    paddingTop: '50px',

    input: {
      padding: '10px',
      fontSize: '1rem'
    },

    button: {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1.25rem'
    }
  }

  return (
    <div style={styles}>
      <h1>Contact Us</h1>
      <form action="">
        <input style={styles.input} type="text" placeholder="Name" /> <br /><br />
        <input style={styles.input} type="email" placeholder="Email" /> <br /><br />
        <input style={styles.input} type="text" placeholder="Subject" /> <br /><br />
        <textarea style={styles.input} placeholder="Message"></textarea> <br /><br />
        <button style={styles.button} type="submit">Submit</button> <br /><br />
      </form>
    </div>
  )
}

export default Contact
