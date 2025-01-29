import { useEffect, useState } from "react";
import { fetchUsers, deleteUser } from "../services/api";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response.data))
      .catch((err) => setError("Failed to load users."));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    }).catch(() => {
      setError("Failed to delete user.");
    });
  };

  return (
    <div className="container mt-4">
      {error && <p className="alert alert-danger">{error}</p>}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Department</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>Department</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-warning btn-sm mx-1">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
