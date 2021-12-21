import React, { useState } from "react";
import "./App.css";
import { fetchRequest } from "./utils";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    fetchRequest(username, email, password, setUser);
    //fetch request to back end that creates a user
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please sign up"}</h1>
      <form onSubmit={submitHandler}>
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
    </div>
  );
};

export default App;
