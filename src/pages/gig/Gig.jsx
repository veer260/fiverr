import React, { useEffect, useRef } from "react";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import GigRight from "../../components/gigRight/GigRight";
import Reviews from "../../components/reviews/Reviews";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import axios from "axios";

const Gig = () => {
  const { id } = useParams();
  const slider = useRef();

  const {
    isLoading,
    error,
    data: gig,
  } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      axios.get(`http://localhost:8800/api/gigs/single/${id}`).then((res) => {
        console.log;
        return res.data;
      }),
  });

  const userId = gig?.userId;
  let box;
  let scroll;

  const fetchUser = async () => {
    // console.log("dbdjbj");
    const response = await axios.get(
      `http://localhost:8800/api/users/${gig?.userId}`
    );

    return response.data;
  };

  const {
    data: userData,
    error: userError,
    isLoading: isLoadingUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    enabled: !!userId,
  });

  function onLeft() {
    box.scrollLeft += scroll;
  }

  function onRight() {
    box.scrollLeft = box.scrollLeft - scroll;
  }

  useEffect(() => {
    if (userData) {
      box = document.querySelector(".gig-slider");

      scroll = slider.current.clientWidth;
    }
  }, [userData]);

  if (isLoading || isLoadingUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex max-w-6xl mx-auto">
        <div className=" basis-2/3   p-4">
          <h2 className="capitalize text-gray-500 text-lg">
            fiverr &gt; {gig.cat} &gt;
          </h2>
          <h1 className="text-2xl font-semibold">{gig.title}</h1>
          <div className="flex items-center space-x-2">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <span className="font-semibold capitalize">
              {userData.username}
            </span>
            <div className="flex text-amber-400">
              {!isNaN(Math.round(gig.totalStars / gig.starNumber)) && (
                <>
                  {Array(Math.round(gig.totalStars / gig.starNumber))
                    .fill()
                    .map((item, i) => (
                      <AiFillStar key={i} />
                    ))}
                </>
              )}
            </div>
          </div>
          <div className="relative">
            <div
              ref={slider}
              className="flex gig-slider scroll-smooth overflow-x-hidden"
            >
              <div className="absolute top-0 flex  h-full items-center">
                <button
                  onClick={onLeft}
                  className="bg-white p-4 rounded-full shadow-md "
                >
                  <AiOutlineLeft />
                </button>
              </div>

              <div className="absolute right-0 flex h-full items-center">
                <button
                  onClick={onRight}
                  className="bg-white p-4 rounded-full shadow-md "
                >
                  <AiOutlineRight />
                </button>
              </div>
              {gig.images.length &&
                gig.images.map((image) => {
                  return (
                    <div className="min-w-full flex justify-center ">
                      <img className="w-2/3" src={image} alt="" />
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <span className="text-xl ">About This Blog</span>
            <p className="text-gray-500 leading-[30px]">{gig.desc}</p>
          </div>
          <div className="mt-12">
            <h1 className="text-xl font-bold">About the Seller</h1>
            <div className="flex items-center space-x-4">
              <div>
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={
                    userData.image ||
                    "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                  }
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <span className="font-semibold">{userData.username}</span>
                <div className="text-amber-400 flex space-x-1 items-center ">
                  {!isNaN(Math.round(gig.totalStars / gig.starNumber)) && (
                    <>
                      {Array(Math.round(gig.totalStars / gig.starNumber))
                        .fill()
                        .map((item, i) => (
                          <AiFillStar key={i} />
                        ))}
                      <span>{Math.round(gig.totalStars / gig.starNumber)}</span>
                    </>
                  )}
                </div>
                <div>
                  <button className="border-2 p-1 text-sm text-gray-600 rounded-md  ">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 p-4 mt-8">
            <div className="flex gap-x-48 gap-y-4 flex-wrap">
              <div className="flex flex-col w-1/3 space-y-1">
                <span className="text-gray-500">From </span>
                <span className="font-semibold">{userData.country}</span>
              </div>
              <div className="flex flex-col w-1/3 space-y-1">
                <span className="text-gray-500">Member since</span>
                <span className="font-semibold">Aug 2022</span>
              </div>
              <div className="flex flex-col w-1/3 space-y-1">
                <span className="text-gray-500">Avg. response time</span>
                <span className="font-semibold">4 hours</span>
              </div>
              <div className="flex flex-col w-1/3 space-y-1">
                <span className="text-gray-500">Last delievery</span>
                <span className="font-semibold">1 day</span>
              </div>
              <div className="flex flex-col w-1/3 space-y-1">
                <span className="text-gray-500">Languages</span>
                <span className="font-semibold">English</span>
              </div>
            </div>
            <div className=" mt-8 py-8 text-gray-500 leading-[25px] border-t-2">
              <p>{userData.desc}</p>
            </div>
          </div>
          <Reviews gigId={id} />
        </div>
        <div className="basis-1/3">
          <GigRight gig={gig} />
        </div>
      </div>
    </div>
  );
};

export default Gig;
