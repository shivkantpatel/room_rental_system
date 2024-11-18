import { createContext, useState } from "react";

export const UserContext = createContext();


const UserProvider = ({ children }) => {



    const [RoomRegister, SetRoomRegister] = useState(
        {
            rooms: '',
            rh1: '',
            rh2: ''
        }
    )


    return (
        <UserContext.Provider value={{
            RoomRegister
        }}>
            {children}
        </UserContext.Provider>

    )
}



export default UserProvider