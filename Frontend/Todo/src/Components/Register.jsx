import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/todo/register", form);

      toast.success("🎉 Registered Successfully!", {
        position: "top-center",
        autoClose: 2000,
      });

      setForm({ name: "", email: "", password: "" });

     navigate("/");
    } catch (error) {
      const msg = error.response?.data?.message || "Registration failed!";
      toast.error(msg, { position: "top-center" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96 transform hover:scale-105 transition duration-300"
      >
       
        <h2 className="text-3xl font-bold text-center mb-2 text-indigo-600">
          Create Account 🚀
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join us and get started now
        </p>

       
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

      
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          className="w-full px-4 py-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          className="w-full px-4 py-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

    
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-md transition duration-200"
        >
          Register
        </button>

        
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
