import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SenderMessage from "../../components/messages/SenderMessage";
import newRequest from "../../utils/newRequest";

const Message = () => {
  const { id } = useParams();
  const [typed, setTyped] = useState();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const fetchMessage = async () => {
    const response = await newRequest.get(`/messages/${id}`);
    console.log(response);
    return response.data;
  };
  const {
    data: messages,
    isLoading,
    error,
  } = useQuery(["messages"], fetchMessage);
  useEffect(() => {
    const chatHistory = document.getElementById("messageScroll");
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }, []);

  const mutation = useMutation({
    mutationFn: (message) => {
      newRequest.post("/messages", message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inside handleSubmit");

    mutation.mutate({
      id: id,
      desc: typed,
    });
    setTyped("");
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-stone-500">
        <Link className=" capitalize text-stone-500 ">Messages</Link>
        <span className=" capitalize"> &gt; John doe &gt;</span>
      </div>
      <div
        id="messageScroll"
        className="h-[500px] flex gap-y-8 my-12 flex-col overflow-y-scroll"
      >
        {isLoading
          ? "loading..."
          : error
          ? "Something went wrong"
          : messages.map((message) => {
              let flag = currentUser._id == message.userId ? "" : "reciever";
              return <SenderMessage flag={flag} message={message} />;
            })}
        {/* <SenderMessage />
        <SenderMessage
          flag="reciever"
          // styleClass="bg-stone-300 text-black "
          // alignClass="self-start  flex-row "
        />
        <SenderMessage />
        <SenderMessage />
        <SenderMessage />
        <SenderMessage /> */}
      </div>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="flex gap-x-8 items-center my-12 r"
      >
        <textarea
          className="p-2 border h-[100px] rounded-lg outline-none flex-grow "
          placeholder="write a message"
          type="textarea"
          name=""
          id=""
          value={typed}
          onChange={(e) => {
            setTyped(e.target.value);
          }}
        />
        <button
          type="submit"
          className=" text-white rounded-lg bg-green-600 px-4 font-semibold text-md font-formal py-1"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Message;
