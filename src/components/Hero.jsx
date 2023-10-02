import { easeInOut, motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import { heroDrone } from '../assets';

const Hero = () => {
  const renderInfoText = () => {
    return (
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#915EFF]'>Alson</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Experienced full-stack web developer specializing in creating dynamic
          and responsive web applications.
        </p>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Dedicated to delivering seamless user experiences and scalable
          solutions.
        </p>
      </div>
    );
  };

  const renderGradientLine = () => {
    return (
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
        <motion.div
          className='w-1 violet-gradient'
          initial={{ height: 0 }}
          animate={{ height: 320 }}
          exit={{ height: 0 }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
        />
      </div>
    );
  };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[370px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {renderGradientLine()}
        {renderInfoText()}
      </div>

      <div className='absolute top-[100px] right-[50px] h-[250px] w-[250px]'>
        <img
          src={heroDrone}
          alt='drone'
          className='h-full w-full object-contain'
        />
      </div>

      <div className='absolute bottom-6 w-full xs:hidden sm:flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
