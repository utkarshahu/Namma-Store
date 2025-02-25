import React, { useState } from "react";
import FormValidator from "./FormValidator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with values: ", { firstName, lastName, email, password, confirmPassword });
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="h-[38vw] w-[80%] flex items-start">
        
        {/* Left Side Image */}
        <div className="h-full rounded-3xl w-1/3 bg-white pt-10 pl-8">
          <img
            src="https://i.pinimg.com/736x/21/64/8c/21648cda1fec088ac79c96167d6df4a0.jpg"
            className="w-full h-full object-cover rounded-3xl"
            alt="luggage"
          />
        </div>

        {/* Form Container */}
        <div className="h-full w-full bg-black flex flex-col items-center">
          <div className="bg-transparent rounded-xl p-8 border-2 w-[85%] mb-5 h-[38vw]">
            
            {/* Title */}
            <h1 className="text-white font-[anzo2] text-4xl py-6 text-center">Create Account</h1>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              
              {/* Name Fields */}
              <div className="flex items-center justify-between w-full gap-4">
                
                {/* First Name */}
                <div className="flex flex-col w-1/2">
                  <input
                    onChange={(e) => setfirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    className="px-5 py-3 w-full text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50"
                    placeholder="First Name"
                  />
                  {errorMessage.firstName && (
                    <div className="text-red-500 text-sm font-[anzo2] px-5 mt-1">
                      {errorMessage.firstName}
                    </div>
                  )}
                </div>

                {/* Last Name */}
                <div className="flex flex-col w-1/2">
                  <input
                    onChange={(e) => setlastName(e.target.value)}
                    value={lastName}
                    type="text"
                    className="px-5 py-3 w-full text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50"
                    placeholder="Last Name"
                  />
                  {errorMessage.lastName && (
                    <div className="text-red-500 text-sm font-[anzo2] px-5 mt-1">
                      {errorMessage.lastName}
                    </div>
                  )}
                </div>

              </div>

              {/* Email */}
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="px-5 py-3 text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50"
                type="email"
                placeholder="Email"
              />
              {errorMessage.email && (
                <div className="text-red-500 text-sm font-[anzo2] px-5 mt-1">
                  {errorMessage.email}
                </div>
              )}

              {/* Password */}
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="px-5 py-3 text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50"
                type="password"
                placeholder="Password"
              />
              {errorMessage.password && (
                <div className="text-red-500 text-sm font-[anzo2] px-5 mt-1">
                  {errorMessage.password}
                </div>
              )}

              {/* Confirm Password */}
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="px-5 py-3 text-lg rounded-full outline-none bg-transparent border-2 placeholder:text-gray-400 border-gray-50"
                type="password"
                placeholder="Confirm Password"
              />
              {errorMessage.confirmPassword && (
                <div className="text-red-500 text-sm font-[anzo2] px-5 mt-1">
                  {errorMessage.confirmPassword}
                </div>
              )}

              {/* Login Redirect */}
              <div className="font-[anzo2] px-5 text-sm text-center mt-3">
                <h4>
                  Already have an account?{" "}
                  <Link to="/login" className="font-[anzo3] text-gray-300">
                    Login
                  </Link>
                </h4>
              </div>

              {/* Form Validator Button */}
              <FormValidator
                firstName={firstName}
                setfirstName={setfirstName}
                lastName={lastName}
                setlastName={setlastName}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
                setEmail={setEmail}
                setPassword={setPassword}
                setConfirmPassword={setConfirmPassword}
                setErrorMessage={setErrorMessage}
                isSignUp={true}
              />
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignIn;
