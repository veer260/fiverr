import { Form, Formik, Field } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import Input from "./Input";
import Input from "../../components/input/Input";
import * as Yup from "yup";
import upload from "../../utils/upload";

const SignUp = () => {
  const [img, setImg] = useState();
  const [path, setpath] = useState("");
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required().min(8),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const handleOpenWidget = () => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "veer123",
        uploadPreset: "fiverr",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          setpath(result.info.original_filename);
          setImg(result.info.secure_url);
        }
      }
    );
    myWidget.open();
  };

  const callLoginApi = async (values) => {
    try {
      const payload = { ...values, image: img };
      console.log("payload:", payload);
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        payload,
        {
          withCredentials: true,
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col  min-w-[500px] my-12 flex-grow ">
      <div className=" flex-grow min-w-[500px]  flex flex-col items-center justify-center">
        <div className=" mb-12">
          <h1 className="font-bergato text-4xl">Sign Up</h1>
          <h2 className=" text-gray-400 font-formal ">
            Discover insightful and thought proviking articles here
          </h2>
          <p className="text-gray-400">Please enter your details</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={callLoginApi}
          validationSchema={schema}
          validateOnMount={true}
        >
          <Form className="flex flex-col min-w-[400px] gap-y-4 " action="">
            {/* <div className="flex gap-y-4 flex-col"> */}
            <Input
              label="email address"
              placeholder="Email address"
              name="email"
              id="email"
              type="email"
            />
            <Input
              label="password"
              placeholder="Password"
              name="password"
              id="password"
              type="password"
            />
            <Input
              label="username"
              placeholder="username"
              name="username"
              id="username"
              type="text"
            />
            <div>
              <label className="font-semibold" htmlFor="">
                Image
              </label>
              <input
                className="p-2 rounded-md border-2 w-[400px] "
                type="text"
                name=""
                id=""
                value={path}
              />
            </div>
            <button
              className="px-2 w-[100px] py-1 rounded-md font-formal tracking-[1px] bg-indigo-500 text-white font-semibold"
              type="button"
              onClick={handleOpenWidget}
            >
              Upload
            </button>

            <Input
              label="Your Country"
              placeholder="Country"
              name="country"
              id="country"
              type="text"
            />

            <div className="flex justify-between">
              <p className="">Already have an account</p>
              <Link
                className="italic underline text-emerald-500 font-bergato"
                to="/login"
              >
                Log In
              </Link>
            </div>
            <button
              className="p-2 bg-teal-500 rounded-md text-white font-formal font-semibold"
              type="submit"
            >
              Sign Up
            </button>
            {/* </div> */}
            <div>
              <label htmlFor="">Activate the seller Account</label>
              {/* <Input
                width="w-4"
                type="checkbox"
                id="isSeller"
                name="isSeller"
              /> */}
              <Field className="mx-2" name="isSeller" type="checkbox"></Field>
            </div>

            <Field
              className="border-2 p-2 rounded-md placeholder:font-formal "
              name="phoneNumber"
              type="text"
              placeholder="Phone-Number"
            />
            <Field
              className="border-2 p-2 h-[100px] placeholder:font-formal "
              name="description"
              as="textarea"
              placeholder="Description"
            />
            <div></div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;
