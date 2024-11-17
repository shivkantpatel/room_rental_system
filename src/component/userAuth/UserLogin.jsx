import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import pic from '../../../public/Screenshot 2024-11-17 183542.png'
import { NavLink } from 'react-router-dom';

const UserLogin = () => {
    return (
        <div className={` absolute inset-0 bg-white bg-cover flex items-center flex-row gap-x-5pic `} style={{ backgroundImage: `url(${pic})` }}>


            <div className=' w-[35%] m-auto '>

                <h1 className=" text-[22px] font-semibold">Sign in to</h1>
                <span className="capitalize text-[16px] font-normal">Room renting system</span>


                <div className='flex flex-row gap-x-4 mt-4'>
                    <button type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 ">
                        <FaGithub className='mr-1 text-[18px]' />
                        Sign in with Github
                    </button>

                    <button type="button" class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500">
                        <FcGoogle className='mr-1 text-[18px]' />
                        Sign in with Google
                    </button>
                </div>

                <center className='mt-2'>or</center>

                <div className='mt-6'>
                    <label className='mb-1 block capitalize' htmlFor="email">email</label>
                    <input type="email"
                        className='border w-full px-2 py-2 rounded'
                        placeholder='Your@gmial.com'
                    />
                </div>
                <div className='mt-6'>
                    <label className='mb-1 block capitalize' htmlFor="Password">Password</label>
                    <input type="Password"
                        className='border w-full px-2 py-2 rounded'
                        placeholder='Password'
                    />
                </div>

                <button className='mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Sign in</button>

                <p className=' text-[13px] font-normal text-slate-600 mt-3'>Need an account? <NavLink to={'/Sign up'} className='text-[14px] text-blue-800 underline'>Sign Up</NavLink> </p>
                <p className='text-[13px] font-normal text-slate-600'>Forgot your password? <span className='text-[14px] text-blue-800 underline'>Reset it</span> </p>
            </div>
            <div className=' w-[40%] m-auto bg-white'>

            </div>
        </div>
    )
}

export default UserLogin