import React from "react";
import MessageRow from "../../components/messages/MessageRow";
import MessageHeader from "../../components/messages/MessageHeader";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Messages = () => {
  const fetchConvos = async () => {
    const response = await newRequest.get("/conversations");
    console.log(response);
    return response.data;
  };
  const { data: convos, isLoading, error } = useQuery(["convos"], fetchConvos);
  return (
    <div className="max-w-6xl mx-auto my-12">
      <h1 className="text-xl font-formal font-bold">Messages</h1>

      <MessageHeader />
      {isLoading
        ? "Loading"
        : error
        ? "Something went wrong"
        : convos.map((convo) => {
            return <MessageRow convo={convo} key={convo.id} />;
          })}
      {/* <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow />
      <MessageRow /> */}
    </div>
  );
};

export default Messages;
