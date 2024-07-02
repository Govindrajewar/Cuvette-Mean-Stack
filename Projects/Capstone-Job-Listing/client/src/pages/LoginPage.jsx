import React, { useState, useEffect } from "react";
import { Login } from "../api/user";
import { useNavigate } from "react-router-dom"

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirectToHome, setRedirectToHome] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if(storedEmail && storedPassword){
      setEmail(storedEmail);
      setPassword(storedPassword);
    }
  }, []);

  const handleLogin = async () => {
    const response = await Login(email, password);
    const token = localStorage.setItem('token', response.token);
    console.log(response);
    navigate("/")
  };

  return (
    <div>
      <h1>LogIn</h1>
      <form>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;
