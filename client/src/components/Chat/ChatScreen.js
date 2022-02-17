import React, { useState } from 'react';
import "./ChatScreen.css";
import { Person } from 'react-bootstrap-icons';

function ChatScreen() {
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        {
            name: 'Zendaya',
            image: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/1622M04_JO079_H.JPG',
            message: 'Whats up <3'
        },
        {
            name: 'Mark',
            image: '...',
            message: 'Whats up <3'
        },
    ])

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <h2>Chat Screen</h2>
            <p className="chatScreen__timestamp"> You matched with Ellen on 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Person className="chatScreen__img" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            )
            )}

            <div className="chatScreen__input">
                <form>
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    placeholder="Type a message ..."
                    type="text" />
                    <button onclick={handleSend} type="submit" className="chatScreen__inputButton"> SEND </button>
                </form>
            </div>
            
            
        </div>
    )
}
export default ChatScreen;