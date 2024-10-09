"use client"
import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="h-[300vh] relative">
      <div className="fixed inset-0 z-0 bg-fixed">
        <Image
          src="/images/bg-auth.jpg"
          alt="scroll background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10">
        <section className="h-[500px] flex flex-col gap-4 items-center justify-center bg-transparent">
          <h1 className="text-4xl text-white font-bold text-center sm:text-5xl">Tripple</h1>
          <h1 className="text-2xl text-white font-bold text-center sm:text-4xl">Welcome to Our Landing Page</h1>
          <h1 className="text-lg text-white font-bold text-center sm:text-3xl">Discover the world with us!</h1>
        </section>

        <div className="h-48 clip-mountain bg-white z-10 -mb-[1px]"></div>

        <section className="h-screen flex items-center justify-center bg-white">
          <p className="text-3xl">Scroll down to see the background move!</p>
        </section>

        <section className="h-screen flex items-center justify-center bg-transparent">
          <p className="text-3xl text-white">The background appears again!</p>
        </section>
      </div>
      
      <style jsx>{`
        .clip-mountain {
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
        }

        @media (max-width: 768px) {
          .clip-mountain {
            /* Adjusted clip-path for smaller screens */
            clip-path: polygon(0 100%, 50% 60%, 100% 100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;