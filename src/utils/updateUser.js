export const updateRequest = async (userToUpdate, userInfoToUpdate) => {
  console.log(userToUpdate, userInfoToUpdate);
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
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
