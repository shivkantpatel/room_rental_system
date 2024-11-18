import React, { useContext } from 'react'
import { UserContext } from '../../storage/UserProvider'
import { NavLink } from 'react-router-dom'

const UserLog_Out = () => {


  // let { SignInModelWindowHandle , SignUpModelWindowHandle } = useContext(UserContext)
  return (
    <div className="flex flex-row gap-[10px]">
      <NavLink
        to="/Sign-up"
        className={() =>
          `px-4 py-2 text-[#0d0C22] hover:text-[#7b7194] font-semibold`
        }
      >
        Sign up
      </NavLink>

      <NavLink
        to="/Sign-in"
        className={() =>
          `px-4 py-2 bg-[#0d0C22] font-medium rounded-full text-white`
        }
      >
        Sign in
      </NavLink>
    </div>

  )
}

export default UserLog_Out