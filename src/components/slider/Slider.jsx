import React, { useEffect } from "react";
import Card from "../card/Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const Slider = () => {
  let box;
  let scroll;
  useEffect(() => {
    box = document.querySelector(".slider");
    console.log(box);
    scroll = box.clientWidth;
  }, []);

  function onLeft() {
    box.scrollLeft += scroll;
  }

  function onRight() {
    box.scrollLeft = box.scrollLeft - scroll;
  }
  const cards = [
    {
      id: 1,
      title: "SEO",
      message: "Unlock growth online",
      img: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      title: "Illustrations",
      message: "Color your dreams",
      img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 3,
      title: "Translation",
      message: "Go Global",
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 4,
      title: "Data Entry",
      message: "Learn your Bussiness",
      img: "https://plus.unsplash.com/premium_photo-1664197368374-605ce8ec8f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 5,
      title: "Book Covers",
      message: "Showcase your story",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 6,
      title: "AI Artists",
      message: "Add talent to AI",
      img: "https://images.unsplash.com/photo-1655720035861-ba4fd21a598d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 7,
      title: "Logo Maker",
      message: "Build your brand",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 8,
      title: "Voice Over",
      message: "Share your message",
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 9,
      title: "Video Explainer",
      message: "Engage your audience",
      img: "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    },
  ];
  return (
    <div className="px-8 py-16 ">
      <h1 className="text-4xl font-semibold ">Popular professional services</h1>
      <div className=" relative mt-8">
        <div
          id="slider"
          className="slider scroll-smooth flex gap-4 overflow-x-hidden "
        >
          <div className="absolute top-0 flex h-full items-center">
            <button
              onClick={onLeft}
              className="bg-white p-4 rounded-full shadow-md "
            >
              <AiOutlineLeft />
            </button>
          </div>

          <div className="absolute right-0 flex h-full items-center">
            <button
              onClick={onRight}
              className="bg-white p-4 rounded-full shadow-md "
            >
              <AiOutlineRight />
            </button>
          </div>

          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              message={card.message}
              imgURL={card.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
