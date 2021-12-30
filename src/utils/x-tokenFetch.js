export const tokenRequest = async (setToken) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("myToken")}` },
    });
    const data = await response.json();
    setToken(data.user); //object inside data (see server.js of backend)   
    console.log(data.message);
    console.log(data.user);
  } catch (error) {
    console.log(error);
  }
};
