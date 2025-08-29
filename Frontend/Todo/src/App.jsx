import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Todo from "./Components/Pages/Todo";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Pages/Profile";

function App() {
  const routes = createBrowserRouter([

    {
      path: "/",
      element:(
        <Login/>
      )
    },{
      path: "/register",
      element: (
        <Register/>
      )
    },
    {
    path:"/profile",
    element:(
      <div>
<Navbar/>
     <Profile/>
      </div>
     
    )
    },
    {
      path: "/home",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/todo",
      element: (
        <div>
          <Navbar />
          <Todo />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
