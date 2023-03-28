import React from "react";
import { useField } from "formik";

const Input = ({ name, label, id, width, ...rest }) => {
  const field = useField(name);
  const [data, meta] = field;
  const { value, onChange, onBlur } = data;
  const { error, touched } = meta;
  // console.log(error);
  return (
    <div className="flex-grow">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        className={
          " p-2 w-full rounded-md bg-none border-2 focus:ring-2 hover:ring-1 caret-teal-600 focus:outline-none appearance-none placeholder:text-slate-300  text-xl " +
          width
        }
        name={name}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {error && touched && (
        <div className="text-red-500 font-formal font-semibold italic">
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
