import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [ userName, setUserName ] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("userName", userName);
    socket.emit("newUser", {
      userName,
      socketID: socket.id,
    });

    navigate("/chat");
  };

  return (
    <form className="home-container" onSubmit={handleSubmit}>
      <h2 className="home-header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username-input"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className='home-cta'>SIGN IN</button>
    </form>
  );
};

export default Home;
