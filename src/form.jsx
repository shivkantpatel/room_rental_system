import React, { useState } from 'react'

const FormImg = () => {


    let [roomname , setRoomNmae ] = useState()
    let [roomname2 , setRoomNmae2 ] = useState()
    return (
        <>


            <form action="http://localhost:8080/upload/house"  method='post' encType='multipart/form-data'>

                <input className='border' type="text" name='house' />
                <input className='border' type="text" onChange={(e)=>setRoomNmae(e.target.value)} name='rooms' />
                <input className='border' type="text" onChange={(e)=>setRoomNmae2(e.target.value)} name='rooms' />
                <input className='border' type="file" name={roomname} />
                <input className="border"
                    type="file"
                    name={roomname2}
                    accept="image/*"
                    multiple />




                <input type="submit" className='border' />

            </form>

        </>
    )
}

export default FormImg