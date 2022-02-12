import React from 'react';
import "./Chat.css";
import ChatBody from "./ChatBody"



function Chats() {
    return (
        <div className="chats">
            <ChatBody
                name="PlainSkis"
                message="Yo whats up"
                timestamp="3 hours ago"
                profilePic=""
            />
            <ChatBody
                name="tammy7856"
                message="You wanna ski later?"
                timestamp="40 seconds ago"
                profilePic="https://s03.s3c.es/imag/businessinsider/2013/10/12/the-30-smartest-celebrities-in-hollywood.jpg"
            />
            

        </div>
    )
}

export default Chats;