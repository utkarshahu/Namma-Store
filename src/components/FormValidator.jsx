import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FormValidator = ({
  firstName,
  setfirstName,
  lastName,
  setlastName,
  email,
  password,
  confirmPassword,
  setEmail,
  setPassword,
  setConfirmPassword,
  setErrorMessage,
  isSignUp
}) => {

  const validateField = () => {
    console.log("Validation Running...");
    setErrorMessage({
      firstName:"",
      lastName:"",
      email: "",
      password: "",
      confirmPassword: ""
    });

    let isValid = true;

    // First Name
    if(!firstName){
      setErrorMessage(prev =>({...prev,firstName:"First name can not be empty!"}));
      setTimeout(()=> setErrorMessage(prev=>({...prev,firstName:""})),2000);
      isValid = false;
    }
    // First Name
    if(!lastName){
      setErrorMessage(prev =>({...prev,lastName:"Last name can not be empty!"}));
      setTimeout(()=> setErrorMessage(prev=>({...prev,lastName:""})),2000);
      isValid = false;
    }










    // ✅ Email Validation
    if (!email) {
      setErrorMessage(prev => ({ ...prev, email: "Email field cannot be empty!" }));
      setTimeout(() => setErrorMessage(prev => ({ ...prev, email: "" })),2000); // Remove after 5 sec
      isValid = false;
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.match(emailPattern)) {
        setErrorMessage(prev => ({ ...prev, email: "Invalid email format!" }));
        setTimeout(() => setErrorMessage(prev => ({ ...prev, email: "" })), 2000); // Remove after 5 sec
        isValid = false;
      }
    }

    // ✅ Password Validation
    if (!password) {
      setErrorMessage(prev => ({ ...prev, password: "Password is required!" }));
      setTimeout(() => setErrorMessage(prev => ({ ...prev, password: "" })), 2000);
      isValid = false;
    } else if (password.length < 6) {
      setErrorMessage(prev => ({ ...prev, password: "Password must be at least 6 characters!" }));
      setTimeout(() => setErrorMessage(prev => ({ ...prev, password: "" })), 2000);
      isValid = false;
    }

    // ✅ Confirm Password Validation
    if (!confirmPassword) {
      setErrorMessage(prev => ({ ...prev, confirmPassword: "Confirm password is required!" }));
      setTimeout(() => setErrorMessage(prev => ({ ...prev, confirmPassword: "" })), 2000);
      isValid = false;
    } else if (password !== confirmPassword) {
      setErrorMessage(prev => ({ ...prev, confirmPassword: "Passwords do not match!" }));
      setTimeout(() => setErrorMessage(prev => ({ ...prev, confirmPassword: "" })), 2000);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateField()) {
      toast.success("🎉 Form submitted successfully!", {autoClose: 3000 });
      // console.table(firstName,lastName,email,password,confirmPassword)
      // console.log(email,password,confirmPassword)
      
      // Reset fields
      setfirstName("");
      setlastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <button 
      onClick={handleSubmit}
      className="px-10 mt-5 py-3 text-xl rounded-full text-black bg-white hover:bg-gray-200 transition-all"
      type="submit"
    >
      {isSignUp ? "Create Account" : "Login"}
    </button>
  );
};

export default FormValidator;
