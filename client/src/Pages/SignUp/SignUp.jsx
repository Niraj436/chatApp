import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignUp()

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };
  return (
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Hello Welcome to <span className="text-[#7747ff]">ChatApp</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        SignUp for an account
      </div>
      <form className="flex flex-col gap-3" >
        <div className="block relative">
          <label
            htmlFor="fullname"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            className="rounded border bg-slate-50 border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="username"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="rounded border bg-slate-50 border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="rounded border bg-slate-50 border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="rounded border bg-slate-50 border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>

        <div className="flex gap-2 py-2">
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
            value="male"
            onChange={(e) =>
              setInputs({ ...inputs, gender: e.target.value })
            }

          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            className="radio radio-primary"
            value="female"
            onChange={(e) =>
              setInputs({ ...inputs, gender: e.target.value })
            }
          />
          <label htmlFor="female">Female</label>
        </div>

        <button
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          onClick={handleSubmit}
          disabled={loading}
        >
          {
            loading ? <span className="loading loading-spinner"></span> : "Sign  Up"
          }
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem] hover:underline text-[#7747ff] cursor-pointer">
        <Link to={"/login"}>
        Already have an account ? Login
        
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
