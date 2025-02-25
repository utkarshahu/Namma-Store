
import React, { useState } from "react";
import FormValidator from "./FormValidator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="bg-black h-screen flex-col flex items-center justify-center w-screen">
      <h1 className="text-white font-[anzo2] text-5xl py-8 ">Login Form</h1>
      <div className="bg-transparent rounded-xl p-10 border-2 w-[400px]">
        <form className="flex flex-col">
          {/* Email Input */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-5 py-3 text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50 "
            type="email"
            placeholder="Enter Your Email"
          />
          {errorMessage.email && <div className="text-red-500 my-1 text-sm font-[anzo2] px-5 ">{errorMessage.email}</div>}

          {/* Password Input */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="px-5 py-3 text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50 mt-5"
            type="password"
            placeholder="Enter Your Password"
          />
          {errorMessage.password && <div className="text-red-500 my-1 text-sm font-[anzo2] px-5 ">{errorMessage.password}</div>}

          {/* Confirm Password Input */}
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            className="px-5 py-3 text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50 mt-5"
            type="password"
            placeholder="Confirm Your Password"
          />
          {errorMessage.confirmPassword && <div className="text-red-500  font-[anzo2] px-5 my-1 text-sm">{errorMessage.confirmPassword}</div>}
          <div className="font-[anzo2] px-5 text-sm mt-2">
                <h4>Dont't have an account <Link to='/signup'  className="font-[anzo3] text-gray-300 ">Signup</Link></h4>
          </div>

          {/* Form Validator Button */}
          <FormValidator
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setErrorMessage={setErrorMessage}
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
