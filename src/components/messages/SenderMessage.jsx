import React from "react";

const SenderMessage = ({ flag, message }) => {
  let styleClass;
  let alignClass;

  if (flag == "reciever") {
    styleClass = "bg-stone-200 text-black rounded-tr-xl";
    alignClass = "self-start";
  } else {
    styleClass = "bg-blue-700 text-white rounded-tl-xl";
    alignClass = "flex-row-reverse self-end";
  }
  return (
    <div className={" flex gap-x-4 w-1/2 " + alignClass}>
      <img
        className="w-8 h-8 object-cover rounded-full"
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
      <div className={"p-4  rounded-b-xl  font-formal  text-sm " + styleClass}>
        <p>{message.desc}</p>
      </div>
    </div>
  );
};

export default SenderMessage;
