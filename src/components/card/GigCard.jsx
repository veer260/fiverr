import React from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
const GigCard = ({ item }) => {
  const {
    username,
    pp,
    img,
    desc,
    star,
    price,
    cover,
    userId,
    starNumber,
    totalStars,
    _id,
  } = item;

  const fetchUser = async () => {
    const response = await axios.get(
      `http://localhost:8800/api/users/${userId}`
    );
    return response.data;
  };

  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: [`${userId}`],
    queryFn: fetchUser,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Link to={`/gigs/${_id}`}>
      <div className="max-w-[300px]  my-12 border-2">
        <div>
          <img
            className="w-[300px] h-[300px] object-cover"
            src={cover}
            alt=""
          />
        </div>
        <div className="flex gap-x-3 p-2">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src={
              user.image ||
              "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt=""
          />
          <h1>{user.username}</h1>
        </div>
        <p className="p-2">{desc}</p>
        <div className="flex items-center gap-x-1 p-2">
          <AiFillStar className="text-amber-500" />
          <span>
            {!isNaN(totalStars / starNumber) &&
              Math.round(totalStars / starNumber)}
          </span>
        </div>

        <footer className="flex justify-between items-center border-t-2 p-2">
          <span className="">
            <AiFillHeart />
          </span>
          <div className="text-gray-500">
            <h1>Starting at</h1>
            <p>${price}</p>
          </div>
        </footer>
      </div>
    </Link>
  );
};

export default GigCard;
