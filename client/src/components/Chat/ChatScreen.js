
import { Avatar } from "@mui/material";
import { React, useState } from "react";
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput ] = useState('');
  const [messages, setMessage] = useState([
    {
    
      name: "gal",
      image: "https://assets.vogue.com/photos/5e738f594fc08a00086af5ee/master/w_2560%2Cc_limit/GettyImages-1206321276.jpg",
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
              alt={message.name}
              src={message.image}
            />
            <p key={message.id1} className="chatScreen-text"><div>{message.name}</div>{message.message}</p>
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


// import React, { useState } from 'react';
// import "./ChatScreen.css";
// import { Person } from 'react-bootstrap-icons';

// function ChatScreen() {
//     const [input, setInput] = useState("")
//     const [messages, setMessages] = useState([
//         {
//             name: 'Zendaya',
//             image: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/1622M04_JO079_H.JPG',
//             message: 'Whats up <3  dvfhbuijkslhbnvjufnldsjkvlnfjodsvnjol'
//         },
//         {
//             name: 'Mark',
//             image: '...',
//             message: 'Whats up <3'
//         },
//     ])

//     const handleSend = e => {
//         e.preventDefault();

//         setMessages([...messages, { message: input }]);
//         setInput("");
//     }
//     return (
//         <div className="chatScreen">
//             <h2>Chat Screen</h2>
//             <p className="chatScreen__timestamp"> You matched with Ellen on 10/08/20</p>
//             {messages.map((message) => (
//                 message.name ? (
//                     <div className="chatScreen__message">
//                         <Person className="chatScreen__img" alt={message.name} src={message.image} />
//                         <p className="chatScreen__text">{message.message}</p>
//                     </div>
//                 ) : (
//                     <div className="chatScreen__message">
//                         <p className="chatScreen__textUser">{message.message}</p>
//                     </div>
//                 )
//             )
//             )}

//             <div className="chatScreen__input">
//                 <form>
//                     <input 
//                     value={input}
//                     onChange={e => setInput(e.target.value)}
//                     className="chatScreen__inputField" 
//                     placeholder="Type a message ..."
//                     type="text" />
//                     <button onclick={handleSend} type="submit" className="chatScreen__inputButton"> SEND </button>
//                 </form>
//             </div>
            
            
//         </div>
//     )
// }
// export default ChatScreen;