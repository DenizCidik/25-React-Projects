import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { services } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {

  const options = {
        max: 45,
        scale: 1.1,
        speed: 1000,
        transition: true,
        easing:"cubic-bezier(.03,.98,.52,.99)",
        
  }


  return (

    <Tilt options={options} className='xs:w-[250px] w-full ease-in-out duration-100'>

    <motion.div variants={fadeIn('right','spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '>
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

      </div>
    </motion.div>

    </Tilt>

  )
}

const About = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>

    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>

    </motion.div>

    <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A
      b, quia dicta deserunt laudantium a voluptates quas perspiciatis, illo dol
      oremque eaque tenetur ullam similique corporis officiis. Lorem ipsum, dolor sit amet consectetur adi
      pisicing elit. Assumenda vitae, eius exercitationem cum commodi quod ame
      t sunt impedit quibusdam suscipit explicabo atque odit culpa, ipsum consequatur alias, officia eos numquam?
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return(
          <ServiceCard key={service.title} index={index} {...service} />
          )
        })}
      </div>

    </>
  )
}

export default SectionWrapper(About,'about')