import React from "react";
import { Link } from 'react-router-dom'

function Navigation() {
  const styles = {
    backgroundColor: "yellow",
    color: "blue",
    padding: "10px",

    button: {
      backgroundColor: "black",
      color: "white",
      padding: "10px 20px",
      margin: "10px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1.25rem",
      textDecoration: "none",
    },
  };

  return (
    <div>
      <div style={{ float: "left" }}>
        <Link style={styles.button} to="/">
          Home
        </Link>
      </div>

      <div style={{ float: "right" }}>
        <Link style={styles.button} to="/contact">
          Contact
        </Link>
        <Link style={styles.button} to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
