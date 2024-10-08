import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-10 items-center justify-center bg-cover bg-center p-4 md:p-10' style={{ backgroundImage: "url('/images/bg-auth.jpg')" }}>
      <div>
        <img src="images/tripple_logo.png" alt="logo" className='rounded-[50%] w-24 md:w-40' />
      </div>
      <div className='bg-white bg-opacity-10 backdrop-blur-md pb-8 w-full max-w-md px-4 md:px-8 rounded-[10px] shadow-lg'>
        <div>
          <h1 className='flex justify-center text-lg md:text-xl text-gray-200 p-4 md:p-6 font-bold'>Login Page</h1>
        </div>
        <form action="">
          <div className='pb-2'>
            <h1 className='text-gray-200 pt-2 px-2'>E-mail</h1>
            <input 
              type="text" 
              className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full rounded-none' 
            />
          </div>
          <div className='py-4'>
            <h1 className='text-gray-200 pt-2 px-2'>Password</h1>
            <input 
              type="password" 
              className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full rounded-none' 
            />
          </div>
          <div className='flex flex-row justify-between py-4'>
            <button className="relative font-semibold rounded-[10px] h-10 w-full overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:h-48 before:w-full before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
              <span className="relative z-10">Log In</span>
            </button>
          </div>
        </form>
        <div className='flex justify-between items-center py-4 text-sm md:text-base'>
          <p className='text-gray-300'>No Account?</p>
          <a href="/register">
            <p className='text-emerald-500 font-medium'>Sign Up</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default page