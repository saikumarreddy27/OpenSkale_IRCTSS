import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <h1 style={{padding: 10,backgroundColor: "blue",textAlign:"center"}} >IRCTC BOOK STIMULATION APP</h1>
    <div style={{ padding: 10, background: "skyblue", textAlign:"center" }}>
      <b><Link to="/">Login | </Link>
      <Link to="/signup">Signup | </Link>
      <Link to="/search">Search | </Link>
      <Link to="/admin">Admin</Link></b>
    </div>
    </>
  );
}

export default Navbar;