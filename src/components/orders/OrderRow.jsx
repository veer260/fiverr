import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const OrderRow = ({ order }) => {
  return (
    <div className="flex justify-between py-2 px-8 mt-8 font-formal bg-green-100 items-center ">
      <span className="flex-1/4">
        <img className="w-8 h-8 object-cover" src={order.img} alt="" />
      </span>
      <span className="flex-1/4">{order.title}</span>
      <span className="flex-1/4">{order.price}</span>
      <Link className="flex-1/4" to="/messages">
        <AiOutlineMail className="text-2xl" />
      </Link>
    </div>
  );
};

export default OrderRow;
