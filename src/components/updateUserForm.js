export const UpdateUserForm = ({ setUserToUpdate, setUserInfoToUpdate, updateHandler }) => {
    return (
      <form onSubmit={updateHandler}>Update User
      <input onChange={(e) => setUserToUpdate(e.target.value)}
      placeholder="username of user to update"
      />
      <input onChange={(e) => setUserInfoToUpdate(e.target.value)}
      placeholder="new email address"
      />
      <button type="submit">Update User</button>
    </form>
    );
};

