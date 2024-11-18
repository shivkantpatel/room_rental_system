import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderMenu = () => {
  return (
    <div>
      <NavLink to={'/room-register'} className={() => `px-4 py-2 text-[#0d0C22] hover:text-[#7b7194] font-semibold`}>
        Explore
      </NavLink>
      <NavLink to={'/room-register'} className={() => `px-4 py-2 text-[#0d0C22] hover:text-[#7b7194] font-semibold`}>
        Rooms-register
      </NavLink>
      <NavLink to={'/room-register'} className={() => `px-4 py-2 text-[#0d0C22] hover:text-[#7b7194] font-semibold`}>
        About
      </NavLink>

    </div>
  )
}

export default HeaderMenu