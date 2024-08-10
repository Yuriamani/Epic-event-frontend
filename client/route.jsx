import { createBrowserRouter } from "react-router-dom";

import Home from "./src/pages/Home";
import Events from "./src/pages/Events";
import { ImPacman } from "react-icons/im";
import AboutUs from "./src/pages/AboutUs";

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
    element: <Events />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);
