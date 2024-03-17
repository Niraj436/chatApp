import React, { useState } from "react";
import { Link } from "react-router-dom";
import uselogin from "../../hooks/uselogin";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {loading, login} = uselogin();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(username,password)

  }


  return (
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Welcome back to <span className="text-[#7747ff]">ChatApp</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Log in to your account
      </div>
      <form className="flex flex-col gap-3">
        <div className="block relative">
          <label
            for="username"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
           Username
          </label>
          <input
            type="text"
            id="username"
            className="rounded border bg-slate-50 border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div className="block relative">
          <label
            for="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="rounded border bg-slate-50 border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            onChange={(e)=>setPassword(e.target.value)}

          />
        </div>
        {/* <div>
          <a className="text-sm text-[#7747ff]" href="#">
            Forgot your password?
          </a>
        </div> */}
        <button
          type="submit"
          className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <span className="loading loading-spinner"></span> : "Login"}
        </button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Don’t have an account yet?{" "}
        <Link to={"/signup"} className="text-sm text-[#7747ff] hover:underline" href="#">
          Sign up for free!
        </Link>
      </div>
    </div>
  );
};

export default Login;
