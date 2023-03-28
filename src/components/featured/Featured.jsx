import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router";

const Featured = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    navigate(`/gigs/?search=${search}`);
  };

  return (
    <div className="p-12 bg-[url('https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80')]  bg-center bg-cover h-[70vh]">
      <div className="w-[50vw] text-white">
        <h1 className="text-5xl font-bold leading-[60px]">
          Find the perfect <span className="italic">freelance</span> services
          for your business
        </h1>
        <div className="flex mt-4 ">
          <div className="flex p-4 bg-white items-center gap-x-4 flex-grow rounded-l-md">
            <span className="text-gray-500">
              <BsSearch />
            </span>

            <input
              className="border-none outline-none caret-teal-500 text-gray-700 placeholder:text-gray-400"
              type="text"
              placeholder='Try "building mobile app"'
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={handleSearch}
              className="bg-emerald-600 text-white h-full px-4 font-formal font-semibold rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-4 text-white font-formal space-x-2">
        <span>Popular: </span>
        <button
          className=" border-[2px] border-white rounded-3xl px-2 font-normal text-sm
          text-white  font-formal bg-none"
        >
          Website Design
        </button>
        <button
          className=" border-[2px] border-white rounded-3xl px-2 font-normal text-sm
          text-white  font-formal bg-none"
        >
          WordPress
        </button>
        <button
          className=" border-[2px] border-white rounded-3xl px-2 font-normal text-sm
          text-white  font-formal bg-none"
        >
          Logo Design
        </button>
        <button
          className=" border-[2px] border-white rounded-3xl px-2 font-normal text-sm
          text-white  font-formal bg-none"
        >
          AI Service
        </button>
      </div>
    </div>
  );
};

export default Featured;
