import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:5000/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-5 w-[50%] m-auto">
      <Link to={"/create"}>
        <button className="bg-blue-200 p-2 rounded-lg mb-2">Add New</button>
      </Link>
      <table className="table-auto border border-slate-600">
        <thead>
          <tr>
            <th className="p-3">No</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.id} className="border border-slate-600">
              <td className="p-3">{i + 1}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.gender}</td>
              <td className="p-3">
                <Link to={`/edit/${user.id}`}>
                  <button type="button" className="bg-blue-300 p-2 rounded-lg">
                    Edit
                  </button>
                </Link>
                <button onClick={() => deleteUser(user.id)} type="button" className="bg-red-400 p-2 rounded-lg ms-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
