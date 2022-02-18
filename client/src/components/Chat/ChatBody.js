import React from 'react';
import "./chat.css";
import Chat from './index';

function Chats({ name, message, profilePic, timestamp }) {
  return (
    <div className='chats'>
        <Chat 
        name="mark"
        message="yo whats up"
        timestamp="40 seconds ago"
        profilePic="https://www.google.com/search?q=bridget+schaefer&rlz=1C5CHFA_enUS964US969&sxsrf=APq-WBsTZrkhSCNTdb3mIsPd_QbJFKQnzw:1644530519327&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwiwyrTLkfb1AhXByosBHb2BDckQ_AUoAXoECAEQAw&biw=865&bih=709&dpr=2#imgrc=Yx9NTphDSY_-nM"
        />
         
    </div>
  )
}

export default Chats