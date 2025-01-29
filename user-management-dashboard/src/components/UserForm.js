import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addUser, updateUser, fetchUserById } from "../services/api";

const UserForm = ({ isEdit }) => {
  const [user, setUser] = useState({ name: "", email: "", department: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit) {
      fetchUserById(id)
        .then(response => setUser(response.data))
        .catch(() => setError("Failed to load user details."));
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const action = isEdit ? updateUser(id, user) : addUser(user);

    action.then(() => navigate("/"))
          .catch(() => setError("Operation failed."));
  };

  return (
    <div className="container mt-4">
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Department</label>
          <input type="text" className="form-control" name="department" value={user.department} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">{isEdit ? "Update" : "Add"} User</button>
      </form>
    </div>
  );
};

export default UserForm;
