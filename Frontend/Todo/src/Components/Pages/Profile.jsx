import React from "react";
import Card from "../Card";
import TodoList from "../TodoList";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
   
      <div className="flex flex-col md:flex-row gap-6">
        
       
        <div className="md:w-1/3 lg:w-1/4">
          <Card />
        </div>

        
        <div className="flex-1">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
