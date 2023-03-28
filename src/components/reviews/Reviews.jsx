import React, { useState } from "react";
import Review from "./Review";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import newRequest from "../../utils/newRequest";

const Reviews = ({ gigId }) => {
  // console.log(gig);
  const [review, setReview] = useState();
  const [rating, setRating] = useState();

  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const fetchReviews = async () => {
    const response = await newRequest.get(`/reviews/${gigId}`);
    console.log("response from fetchReviews:", response);
    return response.data;
  };

  const {
    data: reviews,
    error,
    isLoading,
  } = useQuery(["reviews"], fetchReviews);

  const mutation = useMutation({
    mutationFn: (review) => {
      newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
    onError: () => {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ desc: review, stars: rating, gigId });
    setRating(1);
    setReview("");
  };
  return (
    <div className="mt-12">
      <h1 className="font-semibold text-xl mb-8">Reviews</h1>

      {isLoading
        ? "Loading..."
        : error
        ? "Something is wrong"
        : reviews.map((review) => {
            return <Review key={review._id} review={review} />;
          })}
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
        <div className="">
          <label className="sr-only" htmlFor="review">
            Review
          </label>
          <input
            onChange={handleChange}
            className="border-2 p-2 rounded-md w-[300px] "
            placeholder="Comment your opinion"
            type="text"
            id="review"
          ></input>
        </div>
        <select
          className="w-[100px] border-2 p-2 "
          name="rating"
          id="rating"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button
          type="submit"
          // onClick={handleClick}
          className="bg-green-500 mt-2 text-white font-formal font-semibold px-2 text-sm py-1"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Reviews;
