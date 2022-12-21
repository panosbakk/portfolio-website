import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's Build Something Together</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I am <span className='text-[#5651e5]'>Panagiotis,</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End <span className='text-[#5651e5]'>Web Developer</span>
                </h1>
                <p className='py-4 text-gray-700 max-w-[70%] m-auto'>
                    I'm a front-end web developer specialized in building outstanding web experiences. 
                    Currently, I'm focused on building responsive front-end web applications, and combining them with back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[300px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/panos-bakaloudis-842241234/' target='_blank' rel='noreferrer' >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    </a>
                    <a href='https://www.github.com/panosbakk' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    </a>
                    <a href='https://www.instagram.com/panosbakaloudis/' target='_blank' rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaInstagram />
                    </div>
                    </a>
                    <Link href='#contact'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main