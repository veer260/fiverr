import React from "react";
import { AiFillStar, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { GiSouthAfricaFlag } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Review = ({ review }) => {
  const fetchUser = async () => {
    const response = await newRequest.get(`/users/${review.userId}`);
    return response.data;
  };

  const {
    data: user,
    isLoading,
    error,
  } = useQuery([`user${review.userId}`], fetchUser);

  return (
    <div>
      {isLoading ? (
        "loading..."
      ) : error ? (
        "something is wrong"
      ) : (
        <div className=" py-4">
          <div className="flex items-center gap-x-2">
            <div>
              <img
                className="w-8 h-8 object-cover rounded-full"
                src={
                  user.image ||
                  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <span>{user.username}</span>
              <p>
                <span>
                  <GiSouthAfricaFlag />
                </span>
                {user.country}
              </p>
            </div>
          </div>

          <div className="text-amber-400 flex gap-x-1 items-center">
            {Array(review.stars)
              .fill()
              .map((item, i) => {
                return <AiFillStar key={i} />;
              })}

            <span>{review.stars}</span>
          </div>
          <div className="text-gray-500">
            <p>{review.desc}</p>
          </div>
          <footer className="flex items-center gap-x-2 mt-6">
            <span className="font-semibold">Helpful ?</span>
            <span className="flex items-center">
              <AiOutlineLike /> Yes
            </span>
            <span className="flex items-center">
              <AiOutlineDislike />
              No
            </span>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Review;
