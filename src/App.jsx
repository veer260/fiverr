import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Add from "./pages/add/add";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/myGigs/MyGigs";
import Register from "./pages/Register/Register";
import { Slider } from "./components/slider/Slider";
import Gig from "./pages/gig/Gig";
import Home from "./pages/home/Home";
import Socials from "./components/socials/Socials";
import Gigs from "./pages/gigs/Gigs";
import Orders from "./pages/orders/Orders";

function App() {
  const [count, setCount] = useState(0);

  const Layout = () => {
    return (
      <>
        <Navbar />
        <div>
          <Outlet />
          <Footer />
          <Socials />
        </div>
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },

        {
          path: "add",
          element: <Add />,
        },
        {
          path: "gigs",
          element: <Gigs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "messages/:id",
          element: <Message />,
        },
        {
          path: "myGigs",
          element: <MyGigs />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "/gigs/:id",
          element: <Gig />,
        },
      ],
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
