import React, { useState } from "react";
import moment from "moment/moment";
import newRequest from "../../utils/newRequest";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MessageRow = ({ convo }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const main = currentUser.isSeller ? convo.readBySeller : convo.readByBuyer;
  let col = main ? "bg-gray-100" : "bg-green-100";
  // const [col, setCol] = useState(main ? "bg-gray-100" : "bg-green-100");

  // const main = currentUser.isSeller ? convo.readByBuyer : convo.readBySeller;

  console.log(main);
  //  col = main ? "bg-gray-100" : "bg-green-100";
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["convos"]);
    },
  });

  // console.log(currentUser);

  const handleRead = () => {
    // col = "bg-gray-100";
    // setCol("bg-gray-100");
    mutation.mutate(convo.id);
  };
  return (
    <div className={"flex max-w-6xl  " + col}>
      <div className="w-[300px] pl-1 bg-inherit font-semibold flex items-center border-white border-2">
        <span className="">
          {currentUser.isSeller ? convo.buyerId : convo.sellerId}
        </span>
      </div>
      <Link
        to={`/messages/${convo.id}`}
        className="flex-grow text-stone-500 pl-1 bg-inherit flex items-center border-white border-2"
      >
        <span className="">{convo?.lastMessage}</span>
      </Link>
      <div className="w-[100px] pl-1 bg-inherit flex items-center font-semibold border-white border-2">
        <span className="">{moment(convo.updatedAt).fromNow()}</span>
      </div>
      <div className="w-[150px] pl-1 py-4 bg-inherit flex items-center font-semibold border-white border-2">
        {!main && (
          <button
            onClick={handleRead}
            className="px-2 py-1 text-xs bg-green-600 text-white font-formal font-semibold "
          >
            Mark Read
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageRow;
