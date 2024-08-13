import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import PersonalInfoPage from "./pages/PersonalInfoPage";
import PurchasedEvent from "./components/PurchasedEvent";

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
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/PersonalInfoPage",
    element: <PersonalInfoPage />,
  },
]);

