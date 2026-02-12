import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup Successful");
    navigate("/");
  };

  return (
    <div style={{background:'grey',textAlign:"center",padding:'75px'}}>
      <h2 style={{color:'white'}}>Signup Page</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} /> <br></br>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} /> <br></br> 
      <input placeholder="Password" type="password"
        onChange={e => setForm({...form, password:e.target.value})} /> <br></br><br></br>
      <button onClick={handleSubmit}>Signup</button>
    </div>
  );
}

export default Signup;