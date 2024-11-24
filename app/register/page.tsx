"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

// update frontend
const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [responseMessage, setResponseMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // API volanie na backend s poziadavkou na registraciu
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
        
        if (data.token) {
          console.log(data.token);
          localStorage.setItem('token', data.token); // Uloženie do localStorage
        }

      } else if(response.status === 409) {
        // ak sa email uz nachadza v databaze
        const data = await response.json();
        setResponseMessage(data.message);
        setIsRegistered(true);
      } else {
        const errorData = await response.json(); // Získanie chybových dát
        console.log(errorData);
      }
    } catch (error) {
      console.error('Chyba pri volaní API:', error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setResponseMessage(''); // resetovanie chybovej správy
    setIsRegistered(false); // resetovanie stavu zaregistrovanosti
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
            onChange={handleEmailChange}
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
            className="h-4 w-4 border-gray-400 rounded-sm checked:bg-green-500 checked:border-green-500"
            type="checkbox"
            id="agree"
          />
          <p className='text-gray-300 text-sm'>I agree with <span className='text-emerald-900'>privacy</span> and <span className='text-emerald-900'>policy</span></p>
        </div>
        <div className='flex flex-col justify-between gap-4 py-4'>
          {isRegistered && <div className="error border-2 border-red-400 rounded-xl p-2 text-center text-red-400"><p>{responseMessage}</p></div>}
          <button type="submit" className="relative font-semibold rounded-[10px] h-10 w-full overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:h-48 before:w-full before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
            <span className="relative z-10">Sign Up</span>
          </button>
        </div>
        <div className='flex justify-between items-center py-4 text-sm md:text-base'>
          <p className='text-gray-300'>Already have an account?</p>
          <a href="/auth">
            <p className='text-emerald-500 font-medium'>Log In</p>
          </a>
        </div>
      </form>
    </div>
  </div>
);
};

export default SignUpPage;