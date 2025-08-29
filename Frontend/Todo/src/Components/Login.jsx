import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [form, setForm] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/todo/login", form);

     
      if (res.data && res.data.token && res.data.userid) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userid", res.data.userid);

        toast.success(" Login Successful!", {
          position: "top-center",
          autoClose: 2000,
        });

        setForm({ name: "", password: "" });

         navigate("/home");
      } else {
        toast.error(" Wrong Credentials!", { position: "top-center" });
      }
    } catch (error) {
      const msg = error.response?.data?.message || " Invalid username or password!";
      toast.error(msg, { position: "top-center" });

      
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform hover:scale-105 transition duration-300"
      >
        
        <h2 className="text-3xl font-bold text-center mb-2 text-indigo-600">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Please login to continue
        </p>

      
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

       
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          className="w-full px-4 py-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

      
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-md transition duration-200"
        >
          Login
        </button>

      
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
