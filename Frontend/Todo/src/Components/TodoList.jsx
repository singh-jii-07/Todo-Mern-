import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaClock } from "react-icons/fa";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true); // loader state

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem("token");
        const userid = localStorage.getItem("userid");

        const res = await axios.get("http://localhost:4000/api/todo/getbyuser", {
          headers: {
            Authorization: `Bearer ${token}`,
            userid: userid,
          },
        });

        setTodos(res.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false); // stop loader
      }
    };

    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 drop-shadow-sm">
        📋 My Todos
      </h1>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : todos.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 text-lg">
            ✨ No todos yet! Start adding your tasks.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {todo.title}
              </h2>
              <p className="text-gray-600 mb-4">{todo.description}</p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  📅 {new Date(todo.dueDate).toLocaleDateString()}
                </span>

                {todo.completed ? (
                  <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                    <FaCheckCircle className="text-green-600" /> Completed
                  </span>
                ) : (
                  <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                    <FaClock className="text-yellow-600" /> Pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
