import React from "react";


const TaskNumbers = () => {
    return (  // Yeh return add karna zaroori hai
      <>
        <div className=" flex justify-between gap-5 screen mt-12">
          <div className="py-6 px-10  rounded-md mt-5 w-[45%] bg-rose-300">
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-2xl">New Task</h3>
          </div>
          <div className="py-6 px-10  rounded-md mt-5 w-[45%] bg-blue-300">
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-2xl">New Task</h3>
          </div>
          <div className="py-6 px-10  rounded-md mt-5 w-[45%] bg-green-300">
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-2xl">New Task</h3>
          </div>
          <div className="py-6 px-10  rounded-md mt-5 w-[45%] bg-yellow-300">
            <h2 className="font-semibold text-3xl">0</h2>
            <h3 className="font-medium text-2xl">New Task</h3>
          </div>
        </div>
      </>
    );
  };
export default TaskNumbers;
