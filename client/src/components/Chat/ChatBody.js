import React from 'react';
import { Person } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import "./chat.css";

function ChatBody({ name, message, profilePic, timestamp }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <Person className="chat__img" src={profilePic} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>

            </div>
        </Link>
    )

}

export default ChatBody;