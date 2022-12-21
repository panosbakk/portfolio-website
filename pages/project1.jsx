import React from 'react'
import Image from 'next/image'
import image1 from '../public/assets/projects/image1.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'


const project1 = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={image1} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 '>EL.ID.E.K. system</h2>
          <h3>Node JS / MySQL / HTML / CSS / Javascript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>Donec vehicula magna quis condimentum egestas. 
            In accumsan venenatis ligula, eu tempus sapien aliquet in. Vivamus commodo rhoncus ultrices. 
            Maecenas tempor faucibus arcu, pretium elementum dui laoreet ut. 
            Curabitur dignissim vestibulum purus, id venenatis lacus ultricies quis. 
            Maecenas finibus blandit enim, at tempus massa finibus ut. 
            Aenean porttitor lobortis mauris sed viverra. 
            Aliquam eu tristique metus. Ut vitae tempor velit. 
            Sed ut volutpat libero, eu laoreet lorem. 
            Sed finibus dignissim sem, id fringilla massa aliquet et.
          </p>
          <button className='py-2 px-8 mr-8 text-gray-100 mt-4'>Demo</button>
          <button className='py-2 px-8 mr-8 text-gray-100 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Node JS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>MySql</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>HTML</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>CSS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>JavaScript</p>
            </div>
          </div>
        </div>
        <Link href='/#work'>
          <p className='underline curson-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default project1