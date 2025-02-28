import axios from "axios";

const admin = async (
  title,
  dueDate,
  assignedTo,  
  category,
  description
 
) => {
  try {
    const response = await axios.post("http://localhost:8080/admin", { 
      title,
      dueDate,
      assignedTo, 
      category,
      description
     
    });
    localStorage.setItem("admin", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    alert("Invalid credentials");
    console.error("Login error", error);
  }
};

export default admin; 
