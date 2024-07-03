"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className='z-20 grid items-center h-full p-6 py-20 md:grid-cols-2'>
        <Image
          src="/home-4.png"
          priority
          width={800}
          height={800}
          alt="Profile pic"
          className='mx-auto'
        />

        <div className='flex flex-col justify-center max-w-md'>
          <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
            The power of coding in my hands
            <TypeAnimation
              sequence={[
                " if you can see it.",
                1000,
                " you can do it.",
                1000,
                " the limit is the sky.",
                1000,
                " for you.",
                1000
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
              className='font-bold text-primary'
            />
          </h1>
          <p className='mx-auto mb-2 text-xl text-center md:mx-0 md:text-left md:mb-8'>
            As a software developer, I like to develop any app that you could have in mind, bring it to the web and give to the world-wide web the best of my skills.
          </p>
          <div className='flex items-center justify-center gap-3 md:justify-start md:gap-10'>
            <a href="/portfolio" className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
              Projects
            </a>
            <a href="/contact" className='px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary]
             w-fit rounded-xl hover:shadow-xl hover:shadow-secondary'>
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
