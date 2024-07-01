import React, { useState } from "react";
import { Login } from "../api/user";

function LoginPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    const response = await Login(email, password);
    console.log(response);
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
