import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card() {
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const userid = localStorage.getItem("userid");

        const res = await axios.get("http://localhost:4000/api/todo/getuser", {
          headers: {
            Authorization: `Bearer ${token}`,
            id: userid,
          },
        });

        setProfile(res.data.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setMessage(
          error.response?.data?.message || "⚠ Could not fetch profile"
        );
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userid");
    toast.success("Logged out successfully 👋", {
      position: "top-center",
      autoClose: 2000,
    });
   navigate("/"); 
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <ToastContainer />
      <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
        {message && <p className="text-red-500 mb-4">{message}</p>}

        {profile ? (
          <>
            <div className="flex flex-col items-center">
             
              <div className="relative w-28 h-28 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                <div className="w-28 h-28 flex items-center justify-center rounded-full bg-white text-4xl font-bold text-blue-600 shadow-lg relative z-10">
                  {profile.name ? profile.name.charAt(0).toUpperCase() : "U"}
                </div>
              </div>

          
              <h2 className="text-3xl font-bold text-gray-800">
                {profile.name}
              </h2>
              <p className="text-gray-500 text-lg mb-6">{profile.email}</p>

         
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold transition-all duration-300 hover:shadow-red-400/50"
              >
                🚪 Logout
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-600">Loading profile...</p>
        )}
      </div>
    </div>
  );
}

export default Card;
