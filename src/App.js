import React, { useState } from "react";
import "./App.css";
import { PostCreator } from "./components/postCreator";

const App = () => {
  const [user, setUser] = useState();
  const [post, setPost] = useState();
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, post]);
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : "Please sign in"}</h1>
      <input onChange={(e) => setUser(e.target.value)} />
      <PostCreator setPost={setPost} submitHandler={submitHandler} />
      {list.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default App;
