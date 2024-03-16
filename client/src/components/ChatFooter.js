import React from "react";

const ChatFooter = () => {
  const { message, setMessage } = useState("");

  const handleSetMessage = (event) => {
    event.preventDefault();

    console.log({ userName: localStorage.getItem("userName"), message });
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
        />
        <button className="send-btn">Send</button>
      </form>
    </div>
  );
};

export default ChatFooter;
