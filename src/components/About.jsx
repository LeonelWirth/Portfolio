import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#001D3D] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am a Full-Stack Developer and Electronics Engineer from Argentina with 5 years of experience in programming code in different languages and experience in the Research and Development area. My expertise lies in Javascript (React, Redux, Node Js, Express TypeScript), Python (Pandas, Jupyter Notebook), SQL (PostgreSQL, Sequelize), C, C++, MATLAB, Simulink, and microcontrollers (Arduino, PIC, STM32 & Espressif), as well as Git.
       <br/>
       <br/>
       In terms of my academic background, I gained valuable experience at Henry, where I worked with a team of 8 people to develop a booking app. This involved daily meetings with a TL and weekly demos with a PO. Additionally, I developed a SPA for a recipe catalogue using React and Redux for the Front End, Express for extra functionalities, PostgreSQL in combination with Sequelize for the database, and an external API for fetching data.
       <br/>
       <br/>
       Aside from my technical skills, I am also proficient in English, having completed the EF SET Certificate C2 proficient and studied English Language and Literature/Letters at Country School. My strong interest in new technologies drives me to constantly improve and stay up-to-date with the latest advancements in the field.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          // console.log(service.title)
          return <ServiceCard key={service.title} index={index} {...service} />
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");