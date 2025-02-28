import axios from "axios";

const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:8080/ems", {
      email,
      password,
    });

    localStorage.setItem("employee", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    alert("Invalid Credentials");
    console.error("Login Error:", error); 
  }
};

export default login;
