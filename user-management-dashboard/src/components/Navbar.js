import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark p-3">
    <Link to="#" className="navbar-brand">User Management</Link>
    <Link to="/add" className="btn btn-primary">Add User</Link>
  </nav>
);

export default Navbar;
