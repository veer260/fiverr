import React, { useRef, useState } from "react";
import GigCard from "../../components/card/GigCard";
import { AiOutlineDown } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Gigs = () => {
  // const data = useLocation();
  // console.log("data:", data);
  const { search } = useLocation();
  console.log(search);
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();
  const fetchGigs = async () => {
    const response = await axios.get(
      `http://localhost:8800/api/gigs?${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
    );
    console.log("response", response.data);
    return response.data;
  };

  const {
    isLoading,
    data: Gigs,
    error,
    refetch,
  } = useQuery({ queryKey: ["gigs"], queryFn: fetchGigs });
  console.log("Gigs:", Gigs);

  const handleSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const openHandle = () => {
    setOpen(!open);
  };

  const onApply = () => {
    refetch();
  };

  return (
    <div className="text-gray-500 flex flex-col max-w-6xl mx-auto gap-y-2">
      <h2>FIVERR &gt; GRAPHICS AND DESIGN &gt;</h2>
      <h1 className="text-2xl text-black font-bold">AI Artists</h1>
      <p className="text-gray-500">
        Explore the boundaries of art and technology with Fiverr's AI Artists
      </p>
      <div className="flex justify-between ">
        <div className="flex gap-x-3 items-center">
          <h3 className="text-gray-500 ">Budget</h3>
          <input
            ref={minRef}
            type="number"
            placeholder="min"
            className="px-1 outline-none border-2 rounded-md "
          />
          <input
            ref={maxRef}
            type="number"
            placeholder="max"
            className="px-1 outline-none border-2 rounded-md "
          />
          <button
            onClick={onApply}
            className="bg-green-600 text-sm text-white font-semibold px-2 py-1 rounded-md"
          >
            <span>Apply</span>
          </button>
        </div>

        <div className="relative  mx-auto flex space-x-3 items-center">
          <span>Sort by:</span>
          <span className="font-semibold text-black">
            {sort == "sales" ? "Best Selling" : "Newest"}
          </span>
          <span
            className=" cursor-pointer"
            onClick={() => {
              openHandle();
            }}
          >
            <AiOutlineDown />
          </span>
          {open && (
            <div className="flex flex-col p-3 gap-y-1 bg-white text-gray-900 border-2 absolute top-[50px] right-0">
              <span
                className=" cursor-pointer"
                onClick={() => {
                  handleSort("createdAt");
                }}
              >
                Newest
              </span>
              <span
                className=" cursor-pointer"
                onClick={() => {
                  handleSort("sales");
                }}
              >
                Best Selling
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-8 flex-wrap">
        {isLoading
          ? "Loading"
          : error
          ? "Something went wrong"
          : Gigs.map((gig) => {
              return <GigCard key={gig._id} item={gig} />;
            })}
      </div>
    </div>
  );
};

export default Gigs;
