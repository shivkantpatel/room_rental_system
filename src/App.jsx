
import HeaderMenu from "./component/headerContainer/HeaderMenu"
import LogoContainer from "./component/headerContainer/LogoContainer"
import UserLog_Out from "./component/headerContainer/UserLog_Out"
import UserLogin from "./component/userAuth/UserLogin"
import UserRegisterModel from "./component/userAuth/UserRegisterModel"
import UserProvider from "./storage/UserProvider"

import MainCintainerVedion from "./component/MainCintainerVedion"
import { useState } from "react"
import { Outlet } from "react-router-dom"

function App() {


  return (
    <>



      <UserProvider >
        <div className="Header_container items-center  w-full px-8 flex flex-row justify-between bg-slate-50 bg-opacity-50   ">
          <LogoContainer />

          <div className="flex flex-row justify-between w-full">
            <HeaderMenu />
            <UserLog_Out />
          </div>


        </div>



      </UserProvider>


      <div className="w-full h-[90vh]  flex items-center justify-center">

        <Outlet></Outlet>
      </div>

    </>

  )
}


export default App
