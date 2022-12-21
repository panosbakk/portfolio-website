import React from 'react'
import Image from 'next/image'
import image1 from '../public/assets/projects/image1.png'
import image2 from '../public/assets/projects/image2.png'
import image3 from '../public/assets/projects/image3.png'
import image4 from '../public/assets/projects/image4.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='work' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='w-full text-xl tracking-widest'>Here is some of my <span className='uppercase text-[#5651e5]'>work</span></p>
            <div className='grid md:grid-cols-2 gap-8 '>
                <ProjectItem
                 title='Lorem Ipsum'
                 backgroundImg={image1}
                 tech='React JS'
                 projectUrl='/project1'
                 />
                <ProjectItem 
                    title='Lorem Ipsu'
                    backgroundImg={image2}
                    tech='React JS'
                    projectUrl='/project2'
                />
                <ProjectItem 
                    title='Lorem Ips'
                    backgroundImg={image3}
                    tech='React JS'
                    projectUrl='/project3'
                />
                <ProjectItem 
                    title='Lorem Ip'
                    backgroundImg={image4}
                    tech='React JS'
                    projectUrl='/project4'
                />
            </div>
        </div>
    </div>
  )
}

export default Projects