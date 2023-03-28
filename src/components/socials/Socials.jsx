import React from "react";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsFacebook, BsPinterest } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex justify-between max-w-6xl items-center p-12 mx-auto">
      <div className="flex gap-x-4 items-center">
        <h1 className="text-2xl font-bold">fiverr</h1>
        <span>© Fiverr International Ltd. 2023</span>
      </div>
      <div>
        <div className="flex gap-x-3">
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <BsFacebook />
          </span>
          <span>
            <AiFillLinkedin />
          </span>
          <span>
            <BsPinterest />
          </span>
          <span>
            <AiOutlineInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Socials;
