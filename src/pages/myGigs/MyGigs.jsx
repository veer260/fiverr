import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import GigRow from "../gig/GigRow";

const MyGigs = () => {
  const queryClient = useQueryClient();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const fetchMyGigs = async () => {
    const resposne = await newRequest.get(`/gigs/?userId=${currentUser._id}`);
    console.log("myGigs:", resposne);
    return resposne.data;
  };
  const { isLoading, data: myGigs, error } = useQuery(["myGigs"], fetchMyGigs);

  return (
    <div className="py-8 max-w-6xl mx-auto ">
      <div className="flex justify-between">
        <span className="font-semibold text-xl">Gigs</span>
        <span>
          <Link
            className="p-2 bg-green-500 hover:bg-green-600 font-semibold font-formal text-white rounded-md shadow-md "
            to="/add"
          >
            Add new Gig
          </Link>
        </span>
      </div>
      <div className="flex flex-col gap-y-4 mt-8">
        {isLoading
          ? "loading..."
          : error
          ? "Something went wrong"
          : myGigs.map((myGig) => {
              return <GigRow myGig={myGig} />;
            })}
      </div>
    </div>
  );
};

export default MyGigs;
