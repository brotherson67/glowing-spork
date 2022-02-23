import React from "react";
import { ChatEngine } from "react-chat-engine";
// import DirectChatPage from "../Chat/DirectChatPage"

function Chat() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        userName={"plaindemon"}
        userSecret={"password"}
        projectID={"6837c376-d6cc-43a0-85f6-15cb071f9bf5"}
      />
      {/* <DirectChatPage /> */}
    </div>
  );
}
export default Chat;
