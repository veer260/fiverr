import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const FiverrBus = () => {
  return (
    <div className="bg-[#0D084D] p-16">
      <div className="flex gap-x-12 max-w-6xl mx-auto">
        <div className="flex gap-y-8 flex-col text-white">
          <h1 className="text-4xl ">
            <span className="text-4xl font-bold">fiverr</span> Business{" "}
          </h1>
          <h1 className="text-4xl font-semibold">
            A business solution designed for{" "}
            <span className="italic font-formal">teams</span>
          </h1>
          <p className="text-2xl ">
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="flex space-x-4 items-center">
            <span className="text-gray-500 text-2xl">
              <BsCheckCircle />
            </span>
            <h2 className="text-xl font-semibold">
              Connect to freelancers with proven business experience
            </h2>
          </div>
          <div className="flex space-x-4 items-center">
            <span className="text-gray-500 text-2xl">
              <BsCheckCircle />
            </span>
            <h2 className="text-xl font-semibold">
              Get matched with the perfect talent by a customer success manager
            </h2>
          </div>
          <div className="flex space-x-4 items-center">
            <span className="text-gray-500 text-2xl">
              <BsCheckCircle />
            </span>
            <h2 className="text-xl font-semibold">
              Manage teamwork and boost productivity with one powerful workspace
            </h2>
          </div>
        </div>
        <div>
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FiverrBus;
