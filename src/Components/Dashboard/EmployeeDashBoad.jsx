import React, { useEffect, useState } from "react";
import Header from "../others/Header";
import TaskNumbers from "../others/TaskNumbers";
import TaskList from "../TaskList/TaskList";
import axios from "axios";

const EmployeeDashBoad = () => {
  const [employeeID, setemployeeID] = useState(null);
  const [employeename, setemployeename] = useState("");
  const [task, settask] = useState([]);

  const hadndleSign = (id, name) => {
    setemployeeID(id);
    setemployeename(name);
  };

  useEffect(() => {
    if (employeeID) {
      axios
        .get(`/api/tasks/${employeeID}`)
        .then((response) => {
          settask(response.data);
        })
        .catch((error) => {
          console.error("Error fetchinbg tasks ", error);
        });
    } else {
      settask([]);
    }
  }, [employeeID]);
  return (
    <>
      <div className="text-white  p-10 bg-[#1C1C1C] h-screen">
        <Header value={"Sign in"} OnSignIn={hadndleSign} />

        <TaskNumbers />
        <TaskList task = {task} />
      </div>
    </>
  );
};

export default EmployeeDashBoad;
