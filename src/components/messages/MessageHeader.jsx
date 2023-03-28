import React from "react";

const MessageHeader = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="flex max-w-6xl bg-white">
      <div className="w-[100px] pl-1 bg-inherit font-semibold flex items-center border-white border-2">
        <span className="">{currentUser.isSeller ? "Buyer" : "Seller"}</span>
      </div>
      <div className="flex-grow font-semibold pl-1 bg-inherit flex items-center border-white border-2">
        <span className="">Last Message</span>
      </div>
      <div className="w-[100px] pl-1 bg-inherit flex items-center font-semibold border-white border-2">
        <span className="">Date</span>
      </div>
      <div className="w-[150px] pl-1 py-4 bg-inherit flex items-center font-semibold border-white border-2">
        Action
      </div>
    </div>
  );
};

export default MessageHeader;
