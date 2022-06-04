import React from "react";
import Vedix from '../assets/Vedix.png'
import Tata1mg from '../assets/Tata1mg.png'

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen  text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8" >
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* grid-item */}
          <div style={{backgroundImage:`url(${Vedix})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover-Effect */}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider pl-2'>
                   DHTML
                  </span>
                  <div className='pt-8 text-center'>
                     <a href="https://harmonious-florentine-0b7b40.netlify.app/">
                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>DEMO</button>
                     </a>
                     <a href="https://github.com/bigyanKumar/vedix.com">
                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                     </a>
                  </div>
              </div>
              <div className='opacity-0 group-hover:opacity-100 text-center'>
                <p>A Clone of E-Commerce website Vedix.com, which provides solutions for hair and Skin.Build the same design, applied Sign-In/Sign-Up and Filters suggestions according to produts you are viewing.</p>
              </div>
          </div>
          <div style={{backgroundImage:`url(${Tata1mg})`}}
           className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover-Effect */}
              <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider pl-2'>
                   React
                  </span>
                  <div className='pt-8 text-center'>
                     <a href="https://relaxed-mousse-6ea758.netlify.app/">
                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                     </a>
                     <a href="https://github.com/APURVA-DIVAKAR/clone1mg">
                         <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                     </a>
                  </div>
              </div>
              <div className='opacity-0 group-hover:opacity-100 text-center '>
                <p>A Clone of E-Commerce website Tata1mg, which provides all type of Medicine.Build the same design, applied Sign-In/Sign-Up and Filters suggestions according to produts you are viewing & payment methods.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
