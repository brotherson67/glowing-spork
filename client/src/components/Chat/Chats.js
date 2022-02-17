import React from 'react';
import "./chat.css";
import Chat from "../Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whats up"
                timestamp="40 seconds ago"
                profilePic=""
            />
            <Chat
                name="Mark"
                message="Yo whats up"
                timestamp="40 seconds ago"
                profilePic="https://d20umu42aunjpx.cloudfront.net/_gfx_/hot/angeline_jolie640px.png"
            />

        </div>
    )
}

export default Chats;