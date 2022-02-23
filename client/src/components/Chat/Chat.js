import React from 'react';
import {BsFillPersonFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./chat.css";

function ChatDirect({ name, message, profilePic, timestamp }) {
    return (
        <Link to={`/chat/${name}`}>
            <div className="chat">
                <BsFillPersonFill className="chat__image" src={profilePic} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>

            </div>
        </Link>
    )

}

export default ChatDirect;