import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/todo/register", form);
      console.log("✅ Registered Successfully:", res.data);

      
      setForm({ name: "", email: "", password: "" });

    
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(` ${error.response.data.message || "Registration failed!"}`);
      } else {
        console.log(" Something went wrong!");
      }
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Register
        </h2>

       
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

      
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

       
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
