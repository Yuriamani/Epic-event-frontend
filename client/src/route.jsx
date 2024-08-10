import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import { ImPacman } from "react-icons/im";
import AboutUs from "./pages/AboutUs";

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
]);
