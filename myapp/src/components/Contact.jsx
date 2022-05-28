import React from 'react'

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4" name="contact">
      <form method="POST" action="https://getform.io/f/1390a457-75ef-4a34-80f6-6c62fa2a43d5" className="flex flex-col max-w-[600px] w-full">
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact </p>
              <p className='text-gray-300 py-4'>Shoot me an email - apurvadiwaker@gmail.com</p>
          </div>
          <input type="text" placeholder="Name" name="name" className='bg-[#ccd6f6] p-2' />
              <input type="email" placeholder="Email" name="email" className='my-4 p-2 bg-[#ccd6f6]' />
              <textarea name="message"  rows="10" className='bg-[#ccd6f6] p-2' placeholder="Message"></textarea>
              
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center '>Let's Connect</button>
              
      </form>
    </div>
  )
}

export default Contact