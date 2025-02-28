import React, { useState } from "react";
import Sign from "../Auth/Sign";
import { CgProfile } from "react-icons/cg";
const Header = ({ value = "Login" }) => {
  const [employeeName, setemployeeName] = useState("User");
  const [isModalOpen, setisModalOpen] = useState(false);
  const [show, setshow] = useState(false);


  const signINandDabanepr = ()=>{
    isHandleSignIn();
    dabanepr();
  }

  const isHandleSignIn = () => {
    setisModalOpen(true);
  
  };

  const handleclose = () => {
    setisModalOpen(false);
  };
  const handlemployeeName = (employee) => {
    setemployeeName(employee.name);
  };

  const dabanepr = () => {
    setshow((elem)=>!elem)
  };
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl">
          Helloww <br />
          <span className="text-3xl font-medium">{employeeName}</span>👋
        </h1>
        <button
          onClick={signINandDabanepr}
        
          className="py-2  px-5 bg-emerald-500 rounded-md text-lg"
        >
          {show  ?<CgProfile /> :  value }
        </button>
      </div>
      <Sign
        isOpen={isModalOpen}
        isClose={handleclose}
        onsignIN={handlemployeeName}
      />
    </>
  );
};

export default Header;
