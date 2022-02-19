// code for changing chat to have direct message options

// import React, { useState } from 'react'

// import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

// const DirectChatPage = () => {
// 	const [username, setUsername] = useState('')

// 	function createDirectChat(creds) {
// 		getOrCreateChat(
// 			creds,
// 			{ is_direct_chat: true, usernames: [username] },
// 			() => setUsername('')
// 		)
// 	}

// 	function renderChatForm(creds) {
// 		return (
// 			<div>
// 				<input 
// 					placeholder='Username' 
// 					value={username} 
// 					onChange={(e) => setUsername(e.target.value)} 
// 				/>
// 				<button onClick={() => createDirectChat(creds)}>
// 					Create
// 				</button>
// 			</div>
// 		)
// 	}

// 	return (
// 		<ChatEngine
//         height='100vh'
//         userName={'plaindemon'}
//         userSecret={'password'}
//         projectID={'6837c376-d6cc-43a0-85f6-15cb071f9bf5'}
// 			renderNewChatForm={(creds) => renderChatForm(creds)}
// 		/>
// 	)
// }

// export default DirectChatPage;