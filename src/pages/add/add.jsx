import React, { useReducer, useState } from "react";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { CiBookmarkRemove } from "react-icons/ci";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router";

const Add = () => {
  const queryClient = useQueryClient();
  const [cover, setCover] = useState();
  const [coverPath, setCoverPath] = useState();

  const [imagesPath, setImagesPath] = useState([]);

  const [images, setImages] = useState([]);
  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);
  console.log("state:", state);
  const handleOpenWidget = (domain) => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "veer123",
        uploadPreset: "fiverr",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);

          if (domain == "cover") {
            setCover(result.info.secure_url);
            setCoverPath(result.info.original_filename);
          } else if (domain == "images") {
            setImages([...images, result.info.secure_url]);
            setImagesPath([...imagesPath, result.info.original_filename]);
          }
        }
      }
    );
    myWidget.open();
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_FEATURES", payload: e.target[0].value });
    e.target[0].value = "";
  };
  const handleInputChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleCoverImage = () => {
    handleOpenWidget("cover");
    dispatch({
      type: "ADD_IMAGES",
      payload: {
        cover: cover,
        images: images,
      },
    });
  };

  const handleImages = () => {
    handleOpenWidget("images");
    dispatch({
      type: "ADD_IMAGES",
      payload: {
        cover: cover,
        images: images,
      },
    });
  };

  const handleRemove = () => {};

  const mutation = useMutation(
    {
      mutationFn: (gig) => {
        newRequest.post("/gigs", gig);
      },
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["myGigs"]);
      },
    }
  );
  const navigate = useNavigate();

  const handleSubmit = () => {
    mutation.mutate(state);
    navigate("/gigs");
  };
  return (
    <div className="max-w-6xl mx-auto my-12">
      <h1 className="text-2xl font-formal">Add new Gig</h1>
      <div className="flex gap-x-8 ">
        <div className="flex flex-col basis-1/2 gap-y-4">
          <label
            className=" font-formal text-stone-400 font-semibold "
            htmlFor=""
          >
            Title
          </label>
          <input
            className="border-2 p-2"
            name="title"
            onChange={handleInputChange}
            type="text"
            placeholder="e.g. I will do something I'm really good at"
          />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Category
          </label>
          <select
            onChange={handleInputChange}
            className="border-2 p-2"
            name="cat"
            id="cats"
          >
            <option value="design">Design</option>
            <option value="web">Web Development</option>
            <option value="animation">Animation</option>
            <option value="music">Music</option>
          </select>
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Cover Image
          </label>
          <div className="flex gap-x-4 items-center">
            <button
              className="w-[80px] bg-emerald-500 font-formal text-white shadow-md py-1 px-2 text-sm"
              onClick={handleCoverImage}
            >
              upload
            </button>
            {coverPath && <span className=" border-2 px-1 ">{coverPath}</span>}
          </div>

          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Upload Images
          </label>
          <div>
            <button
              className="w-[150px] bg-emerald-500 font-formal text-white shadow-md py-1 px-1 text-sm"
              onClick={handleImages}
            >
              Upload Images
            </button>
            <div className="flex flex-col gap-y-2 m-2 w-">
              {imagesPath &&
                imagesPath.map((i, index) => {
                  return (
                    <span key={index} className=" border-2 text-sm p-1 ">
                      {i}
                    </span>
                  );
                })}
            </div>
          </div>

          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Description
          </label>
          <textarea
            className="flex-grow border-2 p-2 h-[200px]"
            name="desc"
            id=""
            placeholder="Brief descriptions to introduce your service to customers"
            cols="0"
            rows="16"
            onChange={handleInputChange}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="p-2 bg-green-600 text-white font-formal font-semibold"
          >
            Create
          </button>
        </div>
        <div className="flex flex-col gap-y-4 flex-grow">
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Service Title
          </label>
          <input
            name="shortTitle"
            onChange={handleInputChange}
            className="p-2 border-2"
            type="text"
            placeholder="e.g. One-page web design"
          />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Short Description
          </label>
          <textarea
            className="border-2 p-2 h-[150px]"
            name="shortDesc"
            onChange={handleInputChange}
            id=""
            placeholder="Short description of your service"
            cols="30"
            rows="10"
          ></textarea>
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Delivery Time (e.g. 3 days)
          </label>
          <input
            name="delieveryTime"
            onChange={handleInputChange}
            className="border-2 p-2"
            type="number"
          />
          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Revision Number
          </label>
          <input
            name="revisionNumber"
            onChange={handleInputChange}
            className="border-2 p-2"
            type="number"
          />
          <div>
            <h1 className="font-formal font-semibold text-lg">Features</h1>

            <form
              onSubmit={handleFeature}
              className="flex justify-between"
              action=""
            >
              <input
                className="border-2 p-2 mb-1 flex-grow"
                type="text"
                placeholder="e.g. page design"
              />
              <button
                type="submit"
                className="w-[50px] px-2 py-1 font-formal text-4xl text-teal-500"
              >
                <MdFormatListBulletedAdd />
              </button>
            </form>
            <div className="flex gap-x-1">
              {state?.features?.map((feature, index) => {
                return (
                  <button
                    key={index}
                    className="flex gap-x-2 items-center font-formal capitalize text-sm border-2 border-gray-200 p-2"
                  >
                    {feature}
                    <span
                      onClick={() => {
                        dispatch({ type: "REMOVE_FEATURE", payload: feature });
                      }}
                    >
                      <CiBookmarkRemove className="text-red-500 text-xl font-bold" />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <label
            className="font-formal text-stone-400 font-semibold"
            htmlFor=""
          >
            Price
          </label>
          <input
            className="border-2 p-2"
            type="number"
            name="price"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Add;
