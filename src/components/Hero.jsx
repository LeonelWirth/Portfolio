import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const imageUrl = "https://media-private.canva.com/VK6zU/MAFpvxVK6zU/1/tl.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230725%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230725T203637Z&X-Amz-Expires=86544&X-Amz-Signature=745bc8362c25b437575bada766f65f856cf1c636737128f72063d11ba7d11b1d&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2026%20Jul%202023%2020%3A39%3A01%20GMT"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-blue-500' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div className='flex flex-col mt-5' >
          <img className="w-2/5 flex justify-end"  src={imageUrl} /> 
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-blue-500'>Leonel</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span className='text-blue-500'><b>Full-Stack Developer </b></span> 
             and <span className='text-blue-500'><b>Electronics Engineer </b></span> <br className='sm:block hidden' />from Argentina with 5 years of experience in programming and R&D. 
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
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