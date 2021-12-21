export const loginRequest = async (username, password, setter) => {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    setter(data.username); //object inside data (see server.js of backend)   
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
};
