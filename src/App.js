import React, { useState } from "react";
import "./App.css";
import { createRequest } from "./utils/createUser";
import { loginRequest } from "./utils/loginUser";
//import { logoutRequest } from "./utils/logoutUser";  cannot reset more than one useState

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const createHandler = async (e) => {
    e.preventDefault();
    createRequest(username, email, password, setUser);
    //fetch request to back end that creates a user
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    loginRequest(username, password, setUser);
  };

  const logoutHandler = () => {
    //logoutRequest(setUser, setUsername, setEmail, setPassword);
    //cant reset more than one useState from seperate component so reset here instead.
    setUser();
    setUsername();
    setEmail();
    setPassword();
    console.log("You have logged out");
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please login or sign up"}</h1>
      {! user ?
        <div>
          <form onSubmit={createHandler}>Create User
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button type="submit">Submit</button>
          </form>
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
        </div>
        :
        <div>
          <button onClick={logoutHandler}>Log out</button>
        </div>
        }
    </div>
  );
};

export default App;
