import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaRegCalendarAlt, FaPlusCircle, FaRegStickyNote, FaHeading } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

export default function TodoForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:4000/api/todo/add",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(res.data.message || " Todo added successfully!");
      setFormData({ title: "", description: "", dueDate: "" });
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        toast.error(error.response.data.message || "Failed to add todo!");
      } else {
        toast.error("⚠ Something went wrong!");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-6">
     
      <ToastContainer position="top-right" autoClose={2000} />

      <form
        onSubmit={handleSubmit}
        className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 drop-shadow-sm">
          <FaPlusCircle className="inline-block text-blue-600 mr-2" />
          Add New Todo
        </h2>


        <div className="relative mb-5">
          <FaHeading className="absolute top-3 left-3 text-blue-500" />
          <input
            type="text"
            name="title"
            placeholder="Enter todo title"
            value={formData.title}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

      
        <div className="relative mb-5">
          <FaRegStickyNote className="absolute top-3 left-3 text-purple-500" />
          <textarea
            name="description"
            placeholder="Enter todo description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

       
        <div className="relative mb-6">
          <FaRegCalendarAlt className="absolute top-3 left-3 text-pink-500" />
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 shadow-md transition duration-200"
        >
          <FaPlusCircle className="text-xl" /> Add Todo
        </button>
      </form>
    </div>
  );
}
