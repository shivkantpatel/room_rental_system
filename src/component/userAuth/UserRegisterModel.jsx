import React, { useContext } from 'react'
import { UserContext } from '../../storage/UserProvider';
import { MdErrorOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaRegHandPointRight } from "react-icons/fa6";

const UserRegisterModel = () => {



  return (
    <div className='w-full inset-0 absolute  bg-white'>
      <div className='w-[80%] m-auto '>
        <form className='mt-16 border rounded-[10px]'>

          <div className='w-[80%] m-auto py-6'>
            <h1 className='text-center capitalize text-[25px] ' >user registration</h1>


            <div className="mb-6 flex flex-row gap-x-6 mt-4">

              <div className='w-1/2 '>
                <label htmlFor="large-input" className=" mb-1 text-sm font-medium text-gray-900 capitalize">
                  role <span className=' text-red-500'>*</span>
                </label>
                <select name="role" id="role" className='border px-4 py-1.5 w-full rounded-md' >
                  <option className=' capitalize ' value="select" selected disabled>select option *</option>
                  <option value="Owner" >Owner</option>
                  <option value="User" >User</option>
                </select>
              </div>

              <div className='w-1/2'>
                <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-900 capitalize ">
                  name <span className=' text-red-500'>*</span>

                </label>
                <input type="text" id="name"
                  placeholder='Your Name'
                  class="border px-4 py-1.5 w-full rounded-md" />
              </div>

            </div>

            <div className="mb-6 flex flex-row gap-x-6 mt-4">

              <div className='w-1/2'>
                <label htmlFor="contact" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                  email <span className=' text-red-500'>*</span>
                </label>
                <input type="text" id="email"
                  placeholder='Your@gmial.com'
                  class="border px-4 py-1.5 w-full rounded-md" />
              </div>


              <div className='w-1/2'>
                <label htmlFor="contact" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                  contact <span className=' text-red-500'>*</span>
                </label>
                <input type="number" id="contact"
                placeholder='91+ 0000000000'
                  class="border px-4 py-1.5 w-full rounded-md" />
              </div>

            </div>



            <div className="mb-6 flex flex-row gap-x-6 mt-4">

              <div className='w-1/2'>
                <label htmlFor="password" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                  password <span className=' text-red-500'>*</span>
                </label>
                <div className='w-full flex flex-row border px-4 py-1.5 rounded-md border-green-500  items-center'>
                  <input
                    type="text"
                    id="password"
                    placeholder='Password'
                    className="   text-green-900 focus:outline-none flex-1"

                  />
                  <span className=" items-center text-green-500">  <TiTick /></span>

                </div>


              </div>


              <div className='w-1/2'>
                <label htmlFor="conifirm password" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                  conifirm password <span className=' text-red-500'>*</span>
                </label>

                <div className='w-full flex flex-row border px-4 py-1.5 rounded-md border-red-500  items-center'>
                  <input
                    type="text"
                    id="conifirmPassword"
                    placeholder='Cnf Password'
                    className="   text-green-900 focus:outline-none flex-1"

                  />
                  <span className=" items-center text-red-500"> <MdErrorOutline /> </span>

                </div>

              </div>

            </div>


            <div className='w-full mt-4'>
              <label htmlFor="address" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                address <span className=' text-red-500'>*</span>
              </label>
              <textarea
                id="address"
                name="address"
                rows="2"
                placeholder="Enter your address"
                className="border px-4 py-2 w-full rounded-md resize-none"
              ></textarea>
            </div>





            <div className="mb-6 flex flex-row gap-x-6 mt-4">

              <div className=' w-full'>
                <label htmlFor="city" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                  city <span className=' text-red-500'>*</span>
                </label>
                <input type="text" id="city"
                placeholder='City'
                  class="border px-4 py-1.5 w-full rounded-md" />
              </div>


              <div className='w-full'>
                <label htmlFor="state" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                  state <span className=' text-red-500'>*</span>
                </label>
                <input type="text" id="state"
                placeholder='State'
                  class="border px-4 py-1.5 w-full rounded-md" />
              </div>

              <div className='w-full'>
                <label htmlFor="pincode" className="mb-3 text-sm font-medium text-gray-900 capitalize ">
                  pincode <span className=' text-red-500'>*</span>
                </label>
                <input type="text" id="pincode"
                placeholder='Pincode'
                  class="border px-4 py-1.5 w-full rounded-md" />
              </div>

            </div>



            <div className='flex justify-end' >
              <button className=' capitalize text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5  flex flex-row items-center gap-1'>
                <span>submit</span> <FaRegHandPointRight />
              </button>
            </div>




          </div>

        </form>
      </div>
    </div>
  )
}

export default UserRegisterModel