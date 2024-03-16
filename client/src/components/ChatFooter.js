import React, { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [ message, setMessage ] = useState("");

  const handleTyping = () => {
    socket.emit("typing", `${localStorage.getItem("userName")} is typing...`);
  };

  const handleSetMessage = (event) => {
    event.preventDefault();

    if (message.trim() && localStorage.getItem("userName")) {
      socket.emit("message", {
        text: message,
        name: localStorage.getItem("userName"),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });

      socket.emit("typing", "");
    }

    setMessage("");
  };

  return (
    <div className="chat-footer">
      <form className="form" onSubmit={handleSetMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="send-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
