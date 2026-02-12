import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/search");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{background:'grey',textAlign:"center", padding: '75px'}}>
      <h2 style={{color:'white'}}>Login Page</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /> <br></br> <br></br>
      <input placeholder="Password" type="password"
        onChange={e => setPassword(e.target.value)} /> <br></br><br></br>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;