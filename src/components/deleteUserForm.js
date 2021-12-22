export const DeleteUserForm = ({ setUserDelete, deleteHandler }) => {
    return (
      <form onSubmit={deleteHandler}>Delete User
        <input onChange={(e) => setUserDelete(e.target.value)}
        placeholder="username to delete"
        />
        <button type="submit">Delete User</button>
      </form>
    );
};

