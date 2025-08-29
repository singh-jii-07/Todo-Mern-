import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token"); // token from login
        const userid = localStorage.getItem("userid"); // userid stored at login

        const res = await axios.get("http://localhost:4000/api/todo/getbyuser", {
          headers: {
            Authorization: `Bearer ${token}`,
            userid: userid,
          },
        });

        setTodos(res.data.todos);
        setMessage(""); // clear error
      } catch (error) {
        console.error("Error fetching todos:", error);
        setMessage(error.response?.data?.message || "⚠ Could not fetch todos");
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📋 My Todos</h1>

      {message && (
        <p className="text-center text-red-600 font-medium mb-6">{message}</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-blue-600"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {todo.title}
            </h2>
            <p className="text-gray-600 mt-2">{todo.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-gray-500">
                Due: {new Date(todo.dueDate).toLocaleDateString()}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  todo.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
