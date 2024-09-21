import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-cover bg-center p-10' style={{ backgroundImage: "url('/images/bg-auth.jpg')" }}>
      <div className='bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-[10px] shadow-lg'>
        <form action="">
          <div className='pb-2'>
            <h1 className='text-gray-200 pt-2 px-2 font-bold'>Login</h1>
            <input type="text" className='rounded-[10px] pl-4 h-10'/>
          </div>
          <div className='py-4'>
            <h1 className='text-gray-200 pt-2 px-2 font-bold'>Password</h1>
            <input type="text" className='rounded-[10px] pl-4 h-10'/>
          </div>
          <div className='flex flex-row justify-between'>
            <h1 className='text-gray-900 font-bold p-2'>Register</h1>
            <button className="before:ease relative font-semibold rounded-[10px] h-10 px-6 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
              <span className="relative z-10">Log In</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page