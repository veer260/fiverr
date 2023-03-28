import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { GrPowerCycle } from "react-icons/gr";
import { BsCheck } from "react-icons/bs";

const GigRight = ({ gig }) => {
  return (
    <div className=" p-4 border-2">
      <header className="flex justify-between  w-full items-center font-semibold">
        <span>{gig.shortTitle}</span>
        <span className="text-2xl ">$ {gig.price}</span>
      </header>
      <p className="text-gray-500 my-6"> {gig.shortDesc}</p>
      <div className="flex justify-between items-center my-4 font-semibold">
        <span className="flex items-center gap-x-2">
          <BiTimeFive />
          {gig.delieveryTime} Days Delievery
        </span>
        <span className="flex items-center gap-x-2">
          <GrPowerCycle />
          {gig.revisionNumber} Revisions
        </span>
      </div>
      <div className="flex flex-col gap-y-1">
        {gig.features.map((feature) => {
          return (
            <p
              key={feature}
              className="flex items-center gap-x-1 text-gray-400"
            >
              <BsCheck className="text-2xl text-green-400" /> {feature}
            </p>
          );
        })}

        <button className="p-2 mt-2 bg-green-500 text-white font-semibold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default GigRight;
