import React, { useState } from "react";
import login from "../../Axios/Emsaxios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(email, password);
      if (userData) {
        alert("Login Successful! ✅");
        console.log("User Data:", userData);
      }
    } catch (error) {
      console.error("Login Failed:", error);
    }

    console.log("email", email);
    console.log("password", password);
  };
  return (
    <>
      <div className="flex w-screen h-screen q  q justify-center items-center">
        <div className="border-2 border-emerald-500 p-4 rounded-md">
          <form
            onSubmit={(e) => {
              submithandler(e);
            }}
            className="flex flex-col justify-center items-center  "
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="text-white border-emerald-500 placeholder:text-gray-400 outline-none bg-transparent p-4 text-2xl rounded-4xl border-1 mb-7 mt-4"
              placeholder="Enter your email"
            />
            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="text-white border-emerald-500 placeholder:text-gray-400     outline-none bg-transparent p-4 text-2xl rounded-4xl border-1 mb-7 mt-4"
              type="password"
              placeholder="Enter your password"
            />
            <button className="bg-emerald-500 text-white px-4 py-2 font-bold rounded-full ">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
