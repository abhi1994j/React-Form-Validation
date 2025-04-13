import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { useState } from "react";
import UserList from "./components/UserList";

function App() {
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
  const navigate = useNavigate();

  const validate = (value) => {
    const error = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fnameRegex = /^[A-Za-z]+$/;
    const lnameRegex = /^[A-Za-z]+$/;
    // const companyRegex = /^[A-Za-z]+$/g
    const mobileRegex = /^[6-9]\d{9}$/;
    console.log(value.email);

    if (!value.email) {
      error.email = "Email is required";
      setIsSubmit(false);
    } else if (!emailRegex.test(value.email)) {
      error.email = "Email is not valid";
    }
    if (!value.password) {
      error.password = "Password is required";
    } else if (value.password.length < 6)
      error.password = "Password length should be atleast 6";
    if (!value.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (value.password !== value.cpassword) {
      error.cpassword = "Passwords do not match";
    }
    if (!value.fname) {
      error.fname = "Firstname is required";
    } else if (!fnameRegex.test(value.fname)) {
      error.fname = "Firstname is not valid";
    }
    if (!value.lname) {
      error.lname = "Lastname is required";
    } else if (!lnameRegex.test(value.lname)) {
      error.fname = "Lastname is not valid";
    }
    if (!value.pno) {
      error.pno = "Mobile number is required";
    } else if (!mobileRegex.test(value.pno)) {
      error.pno = "Mobile Number is not valid";
    } else if (value.pno.length > 10 || value.pno.length < 10) {
      error.pno = "Mobile Number is not valid";
    }
    // else if(!companyRegex.test(value.company)) {
    //   error.company = "Company is not valid";
    // }
    return error;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(input);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is submitted Successfully", input);
      setIsSubmit(true);
      navigate("/user", { state: input });
      setInput(initialValue); // reset only when form is valid
    } else {
      setIsSubmit(false);
    }
    // console.log("click from submit");
  }

  return (
    <>
      {/* <Form input={input} setInput={setInput}/> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              input={input}
              setInput={setInput}
              initialValue={initialValue}
              errors={errors}
              setErrors={setErrors}
              IsSubmit={IsSubmit}
              setIsSubmit={setIsSubmit}
              validate={validate}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/user" element={<UserList input={input} />} />
      </Routes>
    </>
  );
}

export default App;
