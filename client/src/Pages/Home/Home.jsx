import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/Messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex justify-center sm:h-[450px] md:h-[550px] overflow-hidden bg-black border border-gray-500 rounded-lg'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home