export const fetchRequest = async (username, email, password, setter) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    setter(data.user);
  } catch (error) {
    console.log(error);
  }
};
