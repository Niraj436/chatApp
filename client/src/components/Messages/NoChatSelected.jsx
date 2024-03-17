import React from 'react'
import { RiMessage2Line } from "react-icons/ri";
import { useAuthContext } from '../../context/AuthContext';


const NoChatSelected = () => {
	const { authUser } = useAuthContext();

  return (
    <div className='flex items-center justify-center w-full h-full'>
    <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <RiMessage2Line className='text-3xl md:text-6xl text-center' />
    </div>
</div>
  )
}

export default NoChatSelected