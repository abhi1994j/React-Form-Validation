import React, { useEffect, useState } from "react";

const Form = () => {
  const initialValue = {
    email: "",
    password: "",
    cpassword: "",
    fname: "",
    lname: "",
    pno: "",
    company: "",
  };
  const [input, setInput] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setInput({ ...input, [name]: value });
  }

  const validate = (value) => {
    const error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
    const mobileRegex = /^[6-9]\d{9}$/g;
    console.log(value.email);
    if (!value.email) {
      error.email = "Email is required";
      setIsSubmit(false);
    } else if (!emailRegex.test(value.email)) {
      error.email = "Email is not valid";
    }
    if (!value.password) {
      error.password = "Password is required";
    }
    if (!value.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (value.password !== value.cpassword) {
      error.cpassword = "Passwords do not match";
    }
    if (!value.fname) {
      error.fname = "Firstname is required";
    }
    if (!value.lname) {
      error.lname = "Lastname is required";
    }
    if (!value.pno) {
      error.pno = "Mobile number is required";
    } else if (!mobileRegex.test(value.pno)) {
      error.pno = "Mobile Number is not valid";
    } else if (value.pno.length > 10 || value.pno.length < 10) {
      error.pno = "Mobile Number is not valid";
    }
    return error;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && IsSubmit) {
      console.log(input, "Form is submitted Successfully");
    }
  }, [errors]);

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(input);
    setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    console.log("Form is submitted Successfully", input);
    setInput(initialValue); // reset only when form is valid
    setIsSubmit(true);
  } else {
    setIsSubmit(false);
  }
    // console.log("click from submit");
  }

  return (
    <section className="w-[90%] max-w-md md:max-w-xl bg-gray-100 px-10 py-5 m-4 rounded-lg">
      <pre className="m-2 text-sm md:text-lg">{JSON.stringify(input, undefined, 2)}</pre>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={input.email}
            onChange={handleChange}
          />
          <p className="text-red-400 text-sm m-2">{errors.email}</p>
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={input.password}
            onChange={handleChange}
          />
          <p className="text-red-400 text-sm m-2">{errors.password}</p>
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="cpassword"
            id="repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={input.cpassword}
            onChange={handleChange}
          />
          <p className="text-red-400 text-sm m-2">{errors.cpassword}</p>
          <label
            htmlFor="repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="fname"
              id="first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.fname}
              onChange={handleChange}
            />
            <p className="text-red-400 text-sm m-2">{errors.fname}</p>
            <label
              htmlFor="first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lname"
              id="last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.lname}
              onChange={handleChange}
            />
            <p className="text-red-400 text-sm m-2">{errors.lname}</p>
            <label
              htmlFor="last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              // ""
              name="pno"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.pno}
              onChange={handleChange}
            />
            <p className="text-red-400 text-sm m-2">{errors.pno}</p>
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mobile number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="company"
              id="company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={input.company}
              onChange={handleChange}
            />
            <p className="text-red-400 text-sm m-2">{errors.company}</p>
            <label
              htmlFor="company"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      {IsSubmit ? <p className="text-center text-green-400 mt-2">Form Submitted Successfully</p> : ""}
    </section>
  );
};

export default Form;
