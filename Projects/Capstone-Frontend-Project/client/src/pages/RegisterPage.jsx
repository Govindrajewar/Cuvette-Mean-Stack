import { useState } from "react";
import { Register } from "../api/user";
import { Navigate } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginRedirect, setShowLoginRedirect] = useState(false);

  const handleRegister = async () => {
    try {
      const response = await Register(name, email, password);

      if (response) {
        setShowLoginRedirect(true);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while registering the user.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
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
      <button type="button" onClick={handleRegister}>
        Register
      </button>

      {showLoginRedirect && <Navigate to="/login" />}
    </div>
  );
}

export default RegisterPage;
