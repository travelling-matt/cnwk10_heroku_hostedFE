export const loginRequest = async (username, password, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    setter(data.username); //object inside data (see server.js of backend)    
    //localStorage.setItem("myToken", data.token);
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};
