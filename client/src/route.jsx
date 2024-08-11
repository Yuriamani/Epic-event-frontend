import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/events",
    element: <MyEvents />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

