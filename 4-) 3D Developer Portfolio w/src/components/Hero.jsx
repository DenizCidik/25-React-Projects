import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';


const Hero = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true)
    }, 500);

    return () => {
      clearTimeout(timeout)
    }

  })

  const animationVariants = {
    visible: {y:[0,24,0], opacity:1},
    
  }


  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* the purple line */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          {/* headers */}


        </div>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#915eff]'>Deniz</span></h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Fugiat minima voluptatibus quibusdam blanditiis sit repellendus
              saepe quia obcaecati porro accusamus?
            </p>
          </div>
        </div>
        <ComputersCanvas />

        

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[30px] h-[64px] rounded-3xl border-2 border-forborder flex justify-center items-start p-1'>
              
                <motion.div  animate={showAnimation ? 'visible' : 'hidden'}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 0,
                  ease: 'easeIn'
                }}
                className='w-4 h-4 rounded-full bg-forborder ease-in' 
                exit={{opacity: 1}}
                variants={animationVariants}
                
                />

                {/* bir use state daha kullanarak opacity kapatilmaya calisilabilir timeout fonksiyonu ile */}
                
            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero