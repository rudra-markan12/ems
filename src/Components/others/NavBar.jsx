import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const arr = [
    {
      path: "/login",
      name: "Login",
    },

    {
        path : '/employeeDashboard' , 
        name : 'EmployeeDashboard'
    } ,

    {
        path : '/admindashboard' ,
        name : "AdminDashBoard" 
    }
  ];
  return (
    <div className="max-w-screen-xl mx-auto      rounded-2xl">
      <nav className="flex items-center justify-between p-4  ">
        {arr.map((elem) => {
          return (
            <Link to={elem.name} className="font-bold text-md bg-emerald-500 rounded-full  py-3 px-5   ">
              {elem.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
