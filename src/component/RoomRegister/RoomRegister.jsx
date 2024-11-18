import React, { useRef, useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

const RoomRegister = () => {


    const [houseProfil, houseProfileset] = useState("");
    const [houseProfilMultipleImg, houseProfilMultipleImgSet] = useState([]);


    let HouseMultipleImgHandleSet = (event) => {

        const files = event.target.files;

        const imageArray = Array.from(files).map(file =>
            URL.createObjectURL(file)
        );


        houseProfilMultipleImgSet(prevImages => [...prevImages, ...imageArray]);

    }


    let handleImageRemove = (index) => {

        console.log(index);
        
      
        houseProfilMultipleImgSet(prevImages => 
            prevImages.filter((image, i) => i !== index) 
        );

    }

    return (
        <div className='w-[80%] m-auto '>


            <h1 className=' capitalize text-[22px] text-center'>House register</h1>
            <form>

                <div className='p-6 border mt-5'>

                    <div className='w-full flex flex-row gap-x-9 mt-7'>

                        <div className='flex flex-col'>

                            <div
                                className="p-2 border-dotted border-2 border-indigo-600 cursor-pointer w-[250px] h-[150px] flex items-center justify-center rounded-md overflow-hidden"
                            >
                                {houseProfil ? (
                                    <img
                                        src={URL.createObjectURL(houseProfil)}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img
                                        src="https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Free-Image.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            <input
                                type="file"
                                className="hidden"
                                name="houseProfile"
                                id='houseProfile'
                                accept='image/*'
                                onChange={(e) => houseProfileset(e.target.files[0])}
                            />



                            {houseProfil ?
                                (

                                    <button
                                        type='button'
                                        className=" mt-4 flex justify-center items-center gap-2 px-3 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300 "
                                        onClick={() => houseProfileset('')}
                                    >
                                        Remove < MdDeleteForever />
                                    </button>

                                ) : (

                                    <button
                                        type='button'
                                        className="mt-4 flex justify-center items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
                                        onClick={() => document.querySelector("#houseProfile").click()}
                                    >
                                        Upload <FaCloudUploadAlt />
                                    </button>)



                            }


                        </div>

                        <div className='w-full  flex flex-col justify-around'>

                            <div className='w-full'>
                                <input type="text"
                                    className='border w-[40%] px-6 py-2 rounded '
                                    name='houseHead'
                                    id='houseHead'
                                    placeholder='House no'

                                />
                            </div>

                            <div className='flex flex-row gap-9 mt-4'>
                                <input type="text"
                                    name='city'
                                    id='city'
                                    placeholder='City'
                                    className='border w-full px-3 py-2 rounded capitalize'

                                />
                                <input type="text"
                                    name='state'
                                    id='state'
                                    placeholder='State'
                                    className='border w-full px-3 py-2 rounded capitalize'

                                />
                                <input type="number"
                                    name='pincode'
                                    id='pincode'
                                    placeholder='Pincode'
                                    className='border w-full px-3 py-2 rounded'

                                />
                            </div>


                            <div className='w-full flex flex-row gap-x-8 mt-6'>
                                <textarea name="address" id="address"
                                    className='border px-4 py-2 w-full rounded-md resize-none'
                                    placeholder='Address' rows='2'
                                >

                                </textarea>

                                <textarea name="description" id="address"
                                    className='border px-4 py-2 w-full rounded-md resize-none'
                                    placeholder='Description' rows='2'
                                >

                                </textarea>


                            </div>



                            {/* selected multiple images */}

                            <div className='w-full mt-10'>
                                <h1 className=' capitalize text-[22px] mb-3 font-serif'>add house multiple images</h1>


                                <div className="p-4 border-dotted border-2  border-indigo-600 cursor-pointer w-full h-[180px] flex items-center justify-center rounded-md overflow-hidden">
                                    <div className="flex flex-wrap justify-center gap-2">  {/* Added gap for spacing between images */}
                                        {houseProfilMultipleImg.length === 0 ? (
                                            <img
                                                src="https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Free-Image.png"
                                                alt="default-placeholder"
                                                className="w-[100px] h-[100px] object-cover"
                                            />
                                        ) : (
                                            houseProfilMultipleImg.map((image, index) => (
                                                <div className=' relative'>
                                                    <img
                                                        key={index}
                                                        src={image}
                                                        alt={`preview-${index}`}
                                                        className="w-[150px] relative px-2 h-[150px] object-cover"
                                                    />

                                                    <button onClick={(event) =>{ handleImageRemove(index)}} type='button' className=' absolute top-[-7px] right-0 text-red-500  border bg-white rounded-full w-5 h-5 flex items-center justify-center'><FaXmark /></button>

                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>


                                <input
                                    type="file"
                                    className="hidden"
                                    name="houseProfile"
                                    id='houseMultiple'

                                    multiple
                                    accept='image/*'
                                    onChange={(event) => HouseMultipleImgHandleSet(event)}
                                />

                                <button type='button' onClick={() => document.querySelector("#houseMultiple").click()} className='border mt-2 px-3 py-2 flex flex-row items-center gap-x-2 rounded-md bg-blue-500 text-white'>{houseProfilMultipleImg.length == 0 ? 'Add ' : 'Add More'
                                } <MdAddPhotoAlternate /></button>




                            </div>


                        </div>






                    </div>
                </div>


            </form>
        </div>
    )
}

export default RoomRegister
