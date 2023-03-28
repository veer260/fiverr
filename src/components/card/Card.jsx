import React from "react";

const Card = ({ title, message, imgURL }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgURL})`,
      }}
      className=" min-w-[300px] h-[400px] font-formal p-4 text-white bg-cover rounded-md bg-center "
    >
      <p>{message}</p>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </div>
  );
};

export default Card;
