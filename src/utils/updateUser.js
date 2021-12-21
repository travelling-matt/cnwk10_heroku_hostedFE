export const updateRequest = async (userToUpdate, userInfoToUpdate) => {
  try {
    const response = await fetch("http://localhost:5000/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filter: {
          username: userToUpdate
        },
        newData: {
          email: userInfoToUpdate
        }
      }),
    });
    const data = await response.json();
    console.log(data.message)
  } catch (error) {
    console.log(error);
  }
};
