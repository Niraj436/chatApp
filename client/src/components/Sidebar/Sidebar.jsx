import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'

const Sidebar = () => {
  return (
    <div className='divide-y-2 divide-gray-300 border-r-2 pt-3'>
        <SearchInput/>
        <Conversations/>
        <LogOutButton/>
    </div>
  )
}

export default Sidebar