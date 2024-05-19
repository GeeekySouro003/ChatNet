import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation';
import { getRandomEmoji } from '../../utils/emoji';

const Conversations = () => {
  const {loading,conversations }=useGetConversation();
  console.log("CONVERSATIONS:",conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
    
    {conversations.map((conversation,idx) => (
      <Conversation
      key={conversation._id}
      conversation={conversation}
      emoji={getRandomEmoji()}
      lastIdx={idx === conversations.length - 1}
      />
    ))}


    {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations