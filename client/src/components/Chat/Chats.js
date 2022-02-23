import React, { useState, useEffect } from "react";
import "./chat.css";
import ChatDirect from "./Chat";
import database from "../../utils/firebase";
import ChatScreen from "./ChatScreen";

function Chats({ name, message, profilePic, timestamp }) {
  const [sent, setSent] = useState([]);
  const [received, setReceived] = useState([]);
  useEffect(() => {
    const unsubscribe = database
      .collection("chats")
      .onSnapshot((snapshot) =>
        setSent(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="chats">
      <ChatDirect
        name={name}
        message={message}
        timestamp={timestamp}
        profilePic={profilePic}
      />
    </div>
  );
}

export default Chats;
