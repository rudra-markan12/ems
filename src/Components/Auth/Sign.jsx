import React, { useState } from "react";

const Sign = ({ isOpen, isClose, onsignIN }) => {
  const [employeId, setemployeId] = useState("");
  const [employeName, setemployeName] = useState(" ");

  const handlesubmit = (elem) => {
    elem.preventDefault();

    onsignIN({
        id : employeId , 
        name : employeName
    });
    isClose();
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="max-w-screen-xl mx-auto  p-8 ">
      <div>
        <div className="max-w-xl mx-auto bg-zinc-800 py-10  rounded-md">
          <h1 className="text-center text-2xl font-bold">Sign in</h1>
          <form action="" className="p-5" onSubmit={handlesubmit}>
            <div className="mb-3  px-4">
              <h3 className="text-xl  text-emerald-500  mb-1 font-semibold">
                Employee Id
              </h3>
              <input
                type="text"
                value={employeId}
                placeholder="Enter employee id"
                className="w-full border-2 border-emerald-500 py-4 px-1 rounded-md font-semibold"
                onChange={(elem) => {
                  setemployeId(elem.target.value);
                }}
              />
            </div>
            <div className="mb-3 mt-8  px-4">
              <h3 className="text-xl  text-emerald-500  mb-1 font-semibold">
                Employee Name
              </h3>
              <input
                type="text"
                value={employeName}
                placeholder="Enter employee id"
                className="w-full border-2 border-emerald-500 py-4 px-1 rounded-md font-semibold"
                onChange={(elem) => {
                  setemployeName(elem.target.value);
                }}
              />
            </div>

            <div className="text-center mt-4">
              <button className="font-semibold text-xl bg-emerald-500 px-5 py-3 mt-4 rounded-full">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign;
