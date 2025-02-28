import React from 'react'

const Alltask = ({task}) => {
  return (
    <>
     <div id='alltask' className='bg-[#1c1c1c] p-5 rounded mb-2 overflow-auto h-68 '>
        {task.map((task) => (
          <div  className='flex-nowrap flex items-center justify-between p-6 font-semibold text-xl rounded-2xl bg-red-400 my-2'>
            <h3>{task.title}</h3>
            <p>{task.dueDate}</p>
            <p>Employee ID: {task.assignedTo}</p>
            <p>Category: {task.category}</p>
           
        
            
           
          </div>
        ))}
      </div>
    </>
  )
}

export default Alltask