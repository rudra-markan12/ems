import React, { useState } from "react";
import Header from "../others/Header";
import CreateingTask from "../others/CreateingTask";
import Alltask from "../TaskList/Alltask";

const AdminDashBoard = () => {
  const [task, setTask] = useState([]);
  const handletask = (newTask) => {
    setTask([...task, newTask]);
  };
  console.log(task); 
  return (
    <>
      <div className="p-4 h-screen w-full  ">
        <Header />

        <CreateingTask onTaskCreated = {handletask} />

        <Alltask  task = {task}/>
      </div>
    </>
  );  
};

export default AdminDashBoard;
