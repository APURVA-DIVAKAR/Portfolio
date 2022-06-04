import React from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {
  
  const sentEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm(`gmail`,`template_0bfz6wa`,e.target,`eZ1jrE7X1qfVPOL7a`)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
    e.target.reset()
  }
// method="POST" action="https://getform.io/f/1390a457-75ef-4a34-80f6-6c62fa2a43d5" 
  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4" name="contact">
      <form className="flex flex-col max-w-[600px] w-full" onSubmit={sentEmail}>
          <div className='pb-8'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact </p>
              <p className='text-gray-300 py-4'>Shoot me an email - apurvadiwaker@gmail.com</p>
          </div>
          <input type="text" placeholder="Name" name="name" className='bg-[#ccd6f6] p-2' />
              <input type="email" placeholder="Email" name="email" className='my-4 p-2 bg-[#ccd6f6]' />
              <textarea name="message"  rows="10" className='bg-[#ccd6f6] p-2' placeholder="Message"></textarea>
              
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center ' onSubmit={sentEmail} >Let's Connect</button>
              
      </form>
      {/* <div id="toast-success" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="ml-3 text-sm font-normal">Item moved successfully.</div>
        <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
            <span class="sr-only">Close</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div> */}
    </div>
  )
}

export default Contact