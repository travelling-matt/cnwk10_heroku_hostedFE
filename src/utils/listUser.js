export const listRequest = async (setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}list`, {
      method: "GET",
    });
    const data = await response.json();
    setter(data.users); //object inside data (see server.js of backend)   
    console.log(data.message);
    console.log(data.users)
  } catch (error) {
    console.log(error);
  }
};
