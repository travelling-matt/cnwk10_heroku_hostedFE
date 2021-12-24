export const tokenRequest = async (setToken) => {
  try {
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setToken(data.user); //object inside data (see server.js of backend)   
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};
