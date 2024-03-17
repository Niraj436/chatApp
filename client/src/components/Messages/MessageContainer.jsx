import React from 'react'
import Messages from './Messages'
import useConversation from '../../zustand/useConverstion'
import NoChatSelected from './NoChatSelected'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const {selectedConversation , setSelectedConversation} = useConversation()

  return (
    <div className='md:min-h[450px] flex flex-col' style={{width:"500px"}}>
      {
        !selectedConversation ? (
          <NoChatSelected/>
        ): (
        <>
          <div className='bg bg-gray-700 px-4 mb-2 border border-b-2 py-4'>
            <span className='label-text text-white'>To:</span> <span className=' text-white font-bold'>{selectedConversation.fullName}</span>
          </div>

          <Messages/>
          <MessageInput/>
        </>

        )
      }
    </div>
  )
}

export default MessageContainer