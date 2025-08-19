import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ name: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/api/todo/login", form);

      console.log("✅ Login Success:", res.data);

      // Save token in localStorage
      localStorage.setItem("token", res.data.token);

      // Reset form after login
      setForm({ name: "", password: "" });

      // Example: navigate to dashboard (if using react-router)
      // navigate("/dashboard");

    } catch (error) {
      if (error.response) {
        console.log(`❌ ${error.response.data.message || "Login failed!"}`);
      } else {
        console.log("❌ Something went wrong!");
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
          Login
        </h2>

        {/* Name input */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password input */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
