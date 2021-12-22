export const CreateUserForm = ({ setUsername, setEmail, setPassword, createHandler }) => {
    return (
        <form onSubmit={createHandler}>Create User
        <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <input onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button type="submit">Submit</button>
        </form>
    );
};