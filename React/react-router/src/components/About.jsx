import React from 'react'

function About() {

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
      <h1>About Us</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem illum mollitia, officiis quibusdam veritatis dolore consectetur! Saepe eveniet maxime laboriosam vero ducimus deserunt ut illum incidunt pariatur tempora sequi rerum sit consectetur, esse odit ad?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus eius asperiores distinctio vero voluptatum libero recusandae atque eligendi non expedita debitis sapiente omnis, culpa, incidunt, assumenda deserunt maiores iste fugiat dolor dolorem dicta doloremque temporibus eum. Nisi inventore eligendi in sapiente. Quasi error unde officia dolorem deleniti, voluptates ut corporis eligendi, in ad culpa reprehenderit aliquam commodi ipsum nam debitis optio earum nostrum soluta vel sint. Veritatis velit quidem illum esse deleniti odio inventore vero itaque ea sint ullam aliquid consectetur ipsum repudiandae modi iste necessitatibus ab, quo sed molestiae. Consequuntur animi quibusdam molestiae ex pariatur facilis non nobis.</p>

    </div>
  )
}

export default About
