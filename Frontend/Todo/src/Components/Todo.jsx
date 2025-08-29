import React, { useState } from "react";
import axios from "axios";

export default function TodoForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const token = localStorage.getItem("token"); // token from login

      const res = await axios.post(
        "http://localhost:4000/api/todo/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("✅ " + res.data.message);
      setFormData({ title: "", description: "", dueDate: "" }); // reset form
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        setMessage("❌ " + error.response.data.message);
      } else {
        setMessage("⚠ Something went wrong!");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">➕ Add New Todo</h2>

        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <textarea
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Todo
        </button>

        {message && (
          <p className="text-center mt-3 text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
