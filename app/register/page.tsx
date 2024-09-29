"use client"
import React, { useState } from 'react';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      // Úspešná registrácia
      console.log('Registration successful:', data);
    } else {
      // Chyba pri registrácii
      console.log('Registration error:', data);
    }
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-cover bg-center p-10' style={{ backgroundImage: "url('/images/bg-auth.jpg')" }}>
      <div className='bg-white bg-opacity-10 backdrop-blur-md pb-8 px-8 w-[450px] rounded-[10px] shadow-lg'>
        <div>
          <h1 className='flex justify-center text-xl text-gray-200 p-6 font-bold'>Sign Up Page</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='pb-2'>
            <h1 className='text-gray-200 pt-2 px-2'>Full Name</h1>
            <input 
              type="text" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)}
              className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full' 
            />
          </div>
          <div className='pb-2'>
            <h1 className='text-gray-200 pt-2 px-2'>E-mail</h1>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full' 
            />
          </div>
          <div className='py-4'>
            <h1 className='text-gray-200 pt-2 px-2'>Password</h1>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full' 
            />
          </div>
          <div className='flex gap-2'>
            <input
              className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
              type="checkbox"
              id="rememberMe"
            />
            <p>I agree with <span className='text-emerald-700'>privacy</span> and <span className='text-emerald-700'>policy</span></p>
          </div>
          <div className='flex flex-row justify-between py-4'>
            <button type="submit" className="before:ease relative font-semibold rounded-[10px] h-10 w-full overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:h-48 before:w-full before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
              <span className="relative z-10">Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;