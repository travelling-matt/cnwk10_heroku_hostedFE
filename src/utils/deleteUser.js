export const deleteRequest = async (username) => {
  try {
    const response = await fetch("http://localhost:5000/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
      }),
    });
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};
