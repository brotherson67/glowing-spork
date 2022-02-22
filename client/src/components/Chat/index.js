// import React from 'react';
// import { Avatar } from '@mui/material';
// import './chat.css';
// import { Link } from 'react-router-dom';

// function Chat({ name, message, profilePic, timestamp }) {
//   return (
//       //need to fix this to route to their name link to=`chat/chat/${name}`
//       <Link to={`/chatscreen`}>
//     <div className='chat'>
//         <Avatar className='chat-img' alt={name} src={profilePic} />
//         <div className='chat-details'>
//             <h2>{name}</h2>
//             <p>{message}</p>
//         </div>
//         <p className='chat-time'>{timestamp}</p>
//     </div>
//     </Link>
//   );
// }

// export default Chat

import React from 'react';
import { ChatEngine } from 'react-chat-engine';
// import DirectChatPage from "../Chat/DirectChatPage"

function Chat() {
	return (
    <div>
<ChatEngine
			height='100vh'
			userName={'plaindemon'}
			userSecret={'password'}
			projectID={'6837c376-d6cc-43a0-85f6-15cb071f9bf5'}
		/>
    {/* <DirectChatPage /> */}
    </div>
		
	);
}
 export default Chat;