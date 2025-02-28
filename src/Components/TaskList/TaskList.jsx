import React from "react";

const TaskList = ({ task }) => {
  return (
    <>
      <div
        id="tasklist"
        className="h-[61%] w-full py-10 flex flex-nowrap gap-6 pl-2 mt-16 overflow-x-auto"
      >
        {task.map(() => {
          <>
            <div className="h-full  flex w-[400px] bg-purple-500 rounded-md flex-shrink-0">
              <div className="p-4 ">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-2xl">Hello</h2>
                  <h3 className="font-semibold text-xl">{task.dueDate}</h3>
                </div>

                <div className="mt-10 ">
                  <h4 className=" text-2xl">{task.description}</h4>
                </div>
              </div>
            </div>
            -
          </>;
        })}
      </div>
    </>
  );
};

export default TaskList;
