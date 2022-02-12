import { Avatar } from "@mui/material";
import { React, useState } from "react";
import './chatscreen.css'

function ChatScreen() {
    const [input, setInput ] = useState('');
  const [messages, setMessage] = useState([
    {
    
      name: "ellen",
      image: "....",
      message: "yo yo yo",
    },
    {
      name: "joe",
      image: "....",
      message: "yo yo yo",
    },
    {
      message: "i am ellen",
    },
  ]);
  const handleSend = e => {
      e.preventDefault();

      setMessage([...messages, {message: input }]);
      setInput('');
  }

  return (
    <div className="chat-screen">
      <p className="chat-time">You matched on 10/23/22</p>
      {messages.map((message) => (
          message.name ? (
            <div className="chatScreen-message">
            <Avatar
              className="chatScreen-img"
              alt={messages.name}
              src={messages.image}
            />
            <p key={message.id1} className="chatScreen-text">{message.message}</p>
          </div>
          ) : (
              <div className="chatScreen-message">
                  <p className="chatScreen-textUser">{message.message}</p>
            </div>
          )
      ))}
        <form className="chat-input">
            <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            className="input-field"
            type="text" 
            placeholder="type a message..." />
            <button onClick={handleSend} type="submit" className="input-btn">Send</button>
        </form>
    
    </div>
  );
}

export default ChatScreen;
