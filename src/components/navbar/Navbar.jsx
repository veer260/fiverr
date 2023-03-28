import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const animateClass = active
    ? " bg-white text-black "
    : " bg-green-900 text-white";

  // console.log(animateClass, window.scrollY);

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(currentUser.isSeller);

  const show = () => {
    setOpen(!open);
  };

  const isActive = () => {
    if (window.scrollY > 0) {
      setActive(true);
    }
  };

  const handleLogout = async () => {
    console.log("handleLogout called");
    await axios.get("http://localhost:8800/api/auth/logout").then((res) => {
      localStorage.setItem("currentUser", null);
      navigate("/");
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div
      className={
        " flex flex-col items-center transition ease-in  duration-500 sticky top-0 z-10" +
        animateClass
      }
    >
      <nav className="max-w-6xl w-full flex justify-between py-4">
        <div className="">
          <span className="text-4xl font-bold">fiverr</span>
          <span className="text-lg font-bold  text-emerald-300">.</span>
        </div>
        <div className="flex space-x-4 items-center">
          <span className="  font-semibold "> Fiverr Business</span>
          <span className="  font-semibold"> Explore</span>
          <span className="  font-semibold"> English</span>
          {!currentUser?.isSeller && (
            <span className="  font-semibold"> Become a seller</span>
          )}
          {!currentUser && (
            <>
              <Link to="/login" className=" font-semibold">
                {" "}
                Sign In
              </Link>
              <button className="px-4 py-2 rounded-md border-2 border-white font-semibold text-white hover:bg-emerald-600 ">
                Join Now
              </button>
            </>
          )}

          {currentUser && (
            <div className="relative flex items-center space-x-4">
              <div>
                <img
                  className="w-8 h-8 object-cover rounded-full"
                  src={
                    currentUser.image ||
                    "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  }
                  alt=""
                />
              </div>
              <span
                className="font-semibold cursor-pointer"
                onClick={() => {
                  show();
                }}
              >
                {currentUser.username}{" "}
              </span>
              {open && (
                <div
                  onClick={() => {
                    setOpen(false);
                  }}
                  className=" text-sm absolute font-formal  bg-white border-2 border-dotted top-16 w-[200px] right-0 flex flex-col space-y-2 p-4"
                >
                  {currentUser.isSeller && (
                    <>
                      <Link
                        to="/myGigs"
                        // onClick={setOpen(false)}
                        className=" text-gray-500 font-semibold cursor-pointer"
                      >
                        Gigs
                      </Link>
                      <Link
                        to="/add"
                        className=" text-gray-500 font-semibold cursor-pointer"
                      >
                        Add new Gig
                      </Link>
                    </>
                  )}

                  <Link
                    to="/orders"
                    className=" text-gray-500 font-semibold cursor-pointer"
                  >
                    Orders
                  </Link>
                  <Link
                    to="/messages"
                    className=" text-gray-500 font-semibold cursor-pointer"
                  >
                    Messages
                  </Link>
                  <Link
                    onClick={handleLogout}
                    className=" text-gray-500 font-semibold cursor-pointer"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
      {active && (
        <div className=" w-full">
          <hr className="" />
          <div className="max-w-6xl mx-auto flex justify-between text-gray-500 font-formal text-sm py-2 ">
            <span>Graphics & Designing</span>
            <span>Video & Animations</span>
            <span>Writing & Translations</span>
            <span>AI Services</span>
            <span>Digital Marketing</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Bussiness</span>
            <span>Lifestyle</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
