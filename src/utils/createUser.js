export const createRequest = async (username, email, password, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      //const response = await fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    setter(data.newUser.username); //newUser is object inside data (see server.js of backend)      
    //localStorage.setItem("myToken", data.token); 
    console.log(setter);
  } catch (error) {
    console.log(error);
  }
};
