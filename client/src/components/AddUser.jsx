import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/users", values);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>Tambah User</div>

      <div className="mt-5 w-[50%] m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              placeholder="Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="gender"
              type="gender"
              onChange={(e) => setValues({ ...values, gender: e.target.value })}
              placeholder="Gender"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
