import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConverstion'
import { extractTime } from '../../Utils/timeExtract'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
  const bubbleBgcolor = fromMe ? "chat-bubble-primary" : ""
  const time = extractTime(message.createdAt)
  return (
    <>
    <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src={profilePic} />
    </div>
  </div>
  <div className={`chat-bubble text-white ${bubbleBgcolor}`}>{message.message}</div>
  <time className="text-xs opacity-50">{time}</time>
</div>

</>
  )
}

export default Message