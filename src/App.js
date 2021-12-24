import React, { useEffect, useState } from "react";
import "./App.css";
import { createRequest } from "./utils/createUser";
import { loginRequest } from "./utils/loginUser";
import { listRequest } from "./utils/listUser";
import { deleteRequest } from "./utils/deleteUser";
import { updateRequest } from "./utils/updateUser";
import { tokenRequest } from "./utils/tokenFetch";
import { CreateUserForm } from "./components/createUserForm";
import { LoginForm } from "./components/loginForm";
import { ListUsersButton } from "./components/listUsersButton";
import { UpdateUserForm } from "./components/updateUserForm";
import { DeleteUserForm } from "./components/deleteUserForm";
import { LogoutButton } from "./components/logoutButton";
import { MapListUsers } from "./components/mapListUsers";

//import { logoutRequest } from "./utils/logoutUser";  cannot reset more than one useState

const App = () => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userlist, setUserlist] = useState("");
  const [userDelete, setUserDelete] = useState("");
  const [userToUpdate, setUserToUpdate] = useState("");
  const [userInfoToUpdate, setUserInfoToUpdate] = useState("");
  const [token, setToken] = useState(false)

  useEffect(() => {
    tokenRequest(setToken);
  }, []);

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
    setUser(null);
    setUsername("");
    setEmail("");
    setPassword("");
    setUserlist("");
    setUserDelete("");
    setUserToUpdate("");
    setUserInfoToUpdate("");
    console.log("You have logged out");
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please login or sign up"}</h1>
      {! user ?
        <div>
          <CreateUserForm setUsername={setUsername} setEmail={setEmail} setPassword={setPassword} createHandler={createHandler} />
          <LoginForm setUsername={setUsername} setPassword={setPassword} loginHandler={loginHandler} />
        </div>
        :
        <div>
          <ListUsersButton listHandler={listHandler} />
          <UpdateUserForm setUserToUpdate={setUserToUpdate} setUserInfoToUpdate={setUserInfoToUpdate} updateHandler={updateHandler} />
          <DeleteUserForm setUserDelete={setUserDelete} deleteHandler={deleteHandler} />
          <LogoutButton logoutHandler={logoutHandler} /> 
        </div>
      }
      {userlist ?
      <div>
        <MapListUsers userlist={ userlist } />        
      </div>
      :
      <div></div>
        }
    </div>
  );
};

export default App;
