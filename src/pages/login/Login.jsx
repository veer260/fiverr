import React, { useState } from "react";
import { useField, Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../components/input/Input";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginError, setLoginError] = useState();
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string().email("").required(),
    password: Yup.string().required().min(3, "Password too short"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  // const config = {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   },
  // };

  const callLoginApi = async (values, bag) => {
    await axios
      .post(
        "https://fiverr-server.onrender.com/api/auth/login",
        {
          email: values.email,
          password: values.password,
        },
        // config,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        setLoginError("");
        navigate("/");
      })
      .catch((error) => {
        setLoginError(error.response.data);
        setTimeout(() => {
          setLoginError("");
        }, 3000);
      });
  };
  return (
    <div className="flex flex-col my-12 flex-grow ">
      <div className=" flex-grow flex flex-col items-center justify-center">
        <div className=" mb-12">
          <h1 className="font-bergato text-4xl">Log In</h1>
          <h2 className=" text-gray-400 font-formal ">Welcome Back!</h2>
          <p className="text-gray-400 font-formal">Please enter your details</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={callLoginApi}
          validationSchema={schema}
          validateOnMount={true}
        >
          <Form className="flex flex-col space-y-4 max-w-[300px]" action="">
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
            <div className="flex justify-between">
              <p className="">Don't have an account</p>
              <Link
                className="italic underline text-emerald-500 font-formal font-semibold"
                to="/register"
              >
                Sign Up
              </Link>
            </div>

            {setLoginError && (
              <div>
                <p className="text-red-500 font-bergato ">{loginError}</p>
              </div>
            )}
            <button
              className="bg-teal-500 text-white font-formal font-semibold  rounded-md p-2"
              type="submit"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
