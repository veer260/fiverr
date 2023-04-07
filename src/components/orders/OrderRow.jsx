import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const OrderRow = ({ order }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = order.sellerId + order.buyerId;
    // console.log("id:", id);
    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/messages/${res.data.id}`);
    } catch (error) {
      const res = await newRequest.post(`/conversations`, {
        to: currentUser.isSeller ? order.buyerId : order.sellerId,
      });
      navigate(`/messages/${res.data.id}`);
    }
  };
  return (
    <div className="flex justify-between py-2 px-8 mt-8 font-formal bg-green-100 items-center ">
      <span className="flex-1/4">
        <img className="w-8 h-8 object-cover" src={order.img} alt="" />
      </span>
      <span className="flex-1/4">{order.title}</span>
      <span className="flex-1/4">{order.price}</span>
      <span className="flex-1/4 cursor-pointer" onClick={handleClick}>
        <AiOutlineMail className="text-2xl" />
      </span>
    </div>
  );
};

export default OrderRow;
