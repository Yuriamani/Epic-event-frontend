import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import PurchasedEvent from "./components/PurchasedEvent";
import Signup from "./pages/Signup"; 
import Login from "./pages/Login";   
import Sidebar from "./components/Sidebar";
import ProfileDashboard from "./components/ProfileDashboard";
import HistoryPage from "./components/HistoryPage";
import PersonalInfoPage from "./components/PersonalInfoPage";

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
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/dashboard",
    element: <ProfileDashboard />,
  },
  {
    path: "/dashboard/personal-info",
    element: <PersonalInfoPage />,
  },
  {
    path: "/dashboard/history",
    element: <HistoryPage />,
  },

]);
