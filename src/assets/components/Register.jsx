import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";

const Register = () => {
  const [errorMessage, setErrormessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setErrormessage("");
    setSuccess(false);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const checkBox= event.target.checkBox.checked;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    console.log(checkBox);
    if(!checkBox){
      setErrormessage('Please accept terms and conditions');
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrormessage("Not strong password");
      return;
    }
    if (password.length < 6) {
      setErrormessage("Password should be 6 charecter at least");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrormessage(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="w-3/4 mx-auto mt-8">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type={show ? "text" : "password"}
            name="password"
            className="grow"
            placeholder="Password"
          />
          {!show ? (
            <button
              onClick={() => {
                setShow(!show);
              }}
              className="btn btn-xs"
            >
              <IoEyeOutline />
            </button>
          ) : (
            <button
              onClick={() => {
                setShow(!show);
              }}
              className="btn btn-xs"
            >
              <FiEyeOff />
            </button>
          )}
        </label>
        <div className="form-control ">
          <label className="label cursor-pointer justify-start">    
            <input
              type="checkbox"
              name="checkBox"
              className="checkbox checkbox-primary"
            />
            <span className="label-text ml-8">Accept our conditions</span>
          </label>
        </div>
        <button className="btn btn-primary w-1/4"> Register</button>

        {errorMessage && <h4 className="text-orange-900">{errorMessage}</h4>}
        {success && (
          <h4 className="text-teal-600">Successfully created user</h4>
        )}
      </form>
    </div>
  );
};

export default Register;
