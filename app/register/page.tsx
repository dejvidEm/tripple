"use client";
import React, { useState } from 'react';

// update frontend
const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // API volanie na backend s verejnou IP adresou
      const response = await fetch('https://tripple.uniquesolutions.sk/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName, 
          email,   
          password 
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Správne spracovanie JSON odpovede
        console.log(data);
      } else {
        const errorData = await response.json(); // Získanie chybových dát
        console.log(errorData);
      }
    } catch (error) {
      console.error('Chyba pri volaní API:', error);
    }
  };

  return (
  <div className='w-full h-screen flex flex-col gap-10 items-center justify-center bg-cover bg-center p-4 md:p-10' style={{ backgroundImage: "url('/images/bg-auth.jpg')" }}>
    <div>
      <img src="images/tripple_logo.png" alt="logo" className='rounded-[50%] w-24 md:w-40' />
    </div>
    <div className='bg-white bg-opacity-10 backdrop-blur-md pb-8 px-4 md:px-8 w-full max-w-md rounded-[10px] shadow-lg'>
      <div>
        <h1 className='flex justify-center text-lg md:text-xl text-gray-200 p-4 md:p-6 font-bold'>Sign Up Page</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='pb-2'>
          <h1 className='text-gray-200 pt-2 px-2'>Full Name</h1>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full rounded-none'
          />
        </div>
        <div className='pb-2'>
          <h1 className='text-gray-200 pt-2 px-2'>E-mail</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full rounded-none'
          />
        </div>
        <div className='py-4'>
          <h1 className='text-gray-200 pt-2 px-2'>Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='pl-4 pb-1 caret-white outline-none h-10 border-b border-gray-300 bg-transparent text-gray-300 w-full rounded-none'
          />
        </div>
        <div className='flex gap-2'>
          <input
            className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
            type="checkbox"
            id="rememberMe"
          />
          <p className='text-gray-300 text-sm'>I agree with <span className='text-emerald-700'>privacy</span> and <span className='text-emerald-700'>policy</span></p>
        </div>
        <div className='flex flex-row justify-between py-4'>
          <button type="submit" className="relative font-semibold rounded-[10px] h-10 w-full overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:h-48 before:w-full before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
            <span className="relative z-10">Sign Up</span>
          </button>
        </div>
      </form>
    </div>
  </div>
);
};

export default SignUpPage;