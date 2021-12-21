import React, { useState } from "react";
import "./App.css";
import { createRequest } from "./utils/createUser";
import { loginRequest } from "./utils/loginUser";
import { listRequest } from "./utils/listUser";
import { deleteRequest } from "./utils/deleteUser";
import { updateRequest } from "./utils/updateUser";

//import { logoutRequest } from "./utils/logoutUser";  cannot reset more than one useState

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userlist, setUserlist] = useState();
  const [userDelete, setUserDelete] = useState();
  const [userToUpdate, setUserToUpdate] = useState();
  const [userInfoToUpdate, setUserInfoToUpdate] = useState();

  const users = userlist;

  const createHandler = async (e) => {
    e.preventDefault();
    createRequest(username, email, password, setUser);
    //fetch request to back end that creates a user
    //e.preventDefault stops page resetting useStates to default on reload
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    loginRequest(username, password, setUser);
    //fetch request to back end to login user
  };

  const listHandler = async (e) => {
    e.preventDefault();
    listRequest(setUserlist);
    //fetch request to back end to list users
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    updateRequest(userToUpdate, userInfoToUpdate);
    //fetch request to back end to delete user by username
  };


  const deleteHandler = async (e) => {
    e.preventDefault();
    deleteRequest(userDelete);
    //fetch request to back end to delete user by username
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

          <button onClick={listHandler}>List Users</button>


          <form onSubmit={updateHandler}>Update User
            <input onChange={(e) => setUserToUpdate(e.target.value)}
            placeholder="username of user to update"
            />
            <input onChange={(e) => setUserInfoToUpdate(e.target.value)}
            placeholder="new email address"
            />
            <button type="submit">Update User</button>
          </form>


          <form onSubmit={deleteHandler}>Delete User
            <input onChange={(e) => setUserDelete(e.target.value)}
            placeholder="username to delete"
            />
            <button type="submit">Delete User</button>
          </form>
          <button onClick={logoutHandler}>Log out</button>

        </div>
      }
      {userlist ?
      <div>
        {userlist.map((item, index) => {
        return <p key={index}>Username: {item.username}, Email: {item.email}</p>;
      })}
      </div>
      :
      <div></div>
        }
    </div>
  );
};

export default App;
