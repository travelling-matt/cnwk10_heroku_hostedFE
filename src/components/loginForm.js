export const LoginForm = ({ setUsername, setPassword, loginHandler }) => {
    return (
        <form onSubmit={loginHandler}>Login
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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

