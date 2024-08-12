import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import PurchasedEvent from "./components/PurchasedEvent";
import Signup from "./pages/Signup"; // Make sure this path is correct
import Login from "./pages/Login";   // Make sure this path is correct

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/purchased-event",
    element: <PurchasedEvent />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
