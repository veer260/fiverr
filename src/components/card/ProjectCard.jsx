import React from "react";

const ProjectCard = (props) => {
  console.log("props:", props);
  //   console.log("from props:", username, img, pp, cat);
  const obj = {
    id: 2,
    img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
    pp: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    cat: "Logo Design",
    username: "Morton Green",
  };
  const { img, username, pp, cat } = props;
  return (
    <div className="relative">
      <div className="flex flex-col shadow-lg min-w-[300px] rounded-md">
        <div>
          <img className="w-[300px]" src={img} alt="" />
        </div>
        <div className="flex p-4 space-x-3 text-gray-500">
          <div className="rounded-full">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={pp}
              alt=""
            />
          </div>
          <div>
            <h1>{cat}</h1>
            <p>by {username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
