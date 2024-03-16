import { ResultType } from "@remix-run/router/dist/utils";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChatBody = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat-main-header">
        <p>Random++</p>
        <button className="leave-chat-btn" onClick={handleLeaveChat}>
          Leave Chat
        </button>
      </header>

      <div className="message-container">
        <div className="message-chats">
          <p className="sender-name">You</p>
          <div className="message-sender">
            <p>Hello there!</p>
          </div>
        </div>

        <div className="message-chats">
          <p>Other</p>
          <div className="message-recepient">
            General Kenobi!
          </div>
        </div>

        <div className="message-status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
