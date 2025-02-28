   import React, { useState } from "react";
   import admin from "../../Axios/AdminAxios";

   const CreatingTask = ({onTaskCreated}) => {
   const [title, setTitle] = useState("");
   const [dueDate, setDueDate] = useState("");
   const [assign, setAssign] = useState("");
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");

   const submitTask = async (e) => {
      e.preventDefault();
      try {
         const admin_data = await admin(
         title,
         dueDate,
         assign,
         category,
         description
         );
         if (admin_data) {
         alert("task assign to", +assign);
         console.log(admin_data);
         onTaskCreated(admin_data)
         }
      } catch (error) {
         console.log("failed ", error);
      }
   };

   return (
      <div>
         <form onSubmit={submitTask}>
         <div className="flex items-center justify-between mt-3 w-full bg-[#1C1C1C] px-4">
            <div className="w-1/2">
               <div className="w-[75%]">
               <h2 className="py-3 font-semibold text-xl">Task Title</h2>
               <input
                  type="text"
                  placeholder="Make a UI Design"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-2 rounded-md border-amber-50 p-3 w-full"
               />
               </div>

               <div className="w-[75%]">
               <h2 className="py-3 font-semibold text-xl">Date</h2>
               <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="border-2 rounded-md border-amber-50 p-3 w-full"
               />
               </div>

               <div className="w-[75%]">
               <h2 className="py-3 font-semibold text-xl">Assign to</h2>
               <input
                  type="text"
                  value={assign}
                  placeholder="Employee Name"
                  onChange={(e) => setAssign(e.target.value)}
                  className="border-2 rounded-md border-amber-50 p-3 w-full"
               />
               </div>

               <div className="w-[75%]">
               <h2 className="py-3 font-semibold text-xl">Category</h2>
               <input
                  type="text"
                  value={category}
                  placeholder="Design, Dev, etc."
                  onChange={(e) => setCategory(e.target.value)}
                  className="border-2 rounded-md border-amber-50 p-3 w-full"
               />
               </div>
               
            </div>

            <div className="w-1/2 flex flex-col p-4">
               <div className="p-3">
               <h2 className="text-xl font-semibold mt-4">Description</h2>
               <textarea
                  name="description"
                  value={description}
                  placeholder="Describe your project"
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 border-2 rounded-md border-red-50 p-2 w-full"
                  cols={60}
                  rows={12}
               ></textarea>
               </div>
               <div className="w-1/2 border-2 border-amber-50 text-center m-3 flex items-center justify-center bg-emerald-500 rounded-md">
               <button type="submit" className="p-3 font-semibold text-xl">
                  Create Task
               </button>
               </div>
            </div>
         </div>
         </form>
      </div>
   );
   };

   export default CreatingTask;
