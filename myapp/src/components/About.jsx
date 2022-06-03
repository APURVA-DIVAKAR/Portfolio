import React from 'react'
import Apurva from '../assets/Apurva.png'

const About = () => {
  return (
    <>
   
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div>   
             
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            
            <div className='sm:text-right text-4xl font-bold '>
              <p className='sm:text-right text-4xl font-bold '>Hi. I'm Apurva,nice to meet you. Please take a look around.</p>
            </div>

            <div>
              <p>I'm from Jodhpur,Rajasthan.I'm a Software Engineer and a Masai graduate. Quick learner and an aspiring full-stack developer with core knowledge of MERN
                    stack technology. Looking forward to applying and enhancing my skills and
                    knowledge as a developer through challenging and exciting opportunities.
              </p>  
            </div>
            <div>
              <img className='w-[180px] h-[200px] rounded-full mx-auto' src={Apurva} alt="Profile Picture" />       
            </div>
          </div>
      </div>
    </div>
  </> 
  )
}

export default About