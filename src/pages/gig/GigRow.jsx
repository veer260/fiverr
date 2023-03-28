import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
const GigRow = ({ extraStyle, myGig }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    {
      mutationFn: (id) => {
        newRequest.delete(`/gigs/${id}`);
      },
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myGigs"]);
      },
    }
  );

  const handleDelete = () => {
    mutation.mutate(myGig._id);
  };
  return (
    <div className={"flex " + extraStyle}>
      <span className="basis-1/5">
        <img
          className="w-8 h-8"
          src={
            myGig.cover ||
            "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }
          alt=""
        />
      </span>
      <span className="basis-1/5">{myGig.title}</span>
      <span className="basis-1/5">{myGig.price}</span>
      <span className="basis-1/5">{myGig.sales}</span>
      <span onClick={handleDelete} className="basis-1/5 cursor-pointer">
        <AiFillDelete />
      </span>
    </div>
  );
};

export default GigRow;
