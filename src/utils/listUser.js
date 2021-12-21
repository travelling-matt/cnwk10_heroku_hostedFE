export const listRequest = async (setter) => {
  try {
    const response = await fetch("http://localhost:5000/list", {
      method: "GET",
    });
    const data = await response.json();
    setter(data.users); //object inside data (see server.js of backend)   
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};
