import { motion } from 'framer-motion';

import resume from '../../resume.pdf';
import { imgPath } from '../../variables';
import { headingVariants } from '../../variables';
import { lineVariants } from '../../variables';

const introTextVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      when: 'beforeChildren',
    },
  },
};

const introImgVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const flipCardVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    rotateY: '360deg',
    transition: {
      duration: 1,
    },
  },
};

const About = ({ reference }) => {
  return (
    <div ref={reference} id='about' className='about'>
      <a href={resume} target='_blank' rel='noreferrer' className='resume'>
        Resume
      </a>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-200px' }}
      >
        <motion.h2
          className='heading heading--about'
          variants={headingVariants}
        >
          ABOUT <br />
          <motion.span
            className='underline'
            variants={lineVariants}
          ></motion.span>
        </motion.h2>
      </motion.div>

      <motion.div
        className='about-intro'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-300px' }}
      >
        <motion.div className='about-intro__text' variants={introTextVariants}>
          <h2 className='heading heading--about-intro'>Who's this guy?</h2>
          <p className='paragraph paragraph--about-intro'>
            I'm a Front-End Developer for EVO-IN-MOTION Technology in Vancouver,
            BC.
          </p>
          <p className='paragraph paragraph--about-intro'>
            I have serious passion for creating stunning websites with intuitive
            user experience.
          </p>
          <p className='paragraph paragraph--about-intro'>
            I enjoy learning and teaching any technical skills in programming.
            In the past, I was a programming instructor at Sager Education lnc.
          </p>

          <span
            className='paragraph paragraph--about-intro'
            style={{ display: 'block', marginTop: '2rem' }}
          >
            Skills:
          </span>

          <div className='about-intro__text__cards'>
            <motion.div
              className='about-intro__text__cards__item'
              variants={flipCardVariants}
            >
              HTML
            </motion.div>
            <motion.div
              className='about-intro__text__cards__item'
              variants={flipCardVariants}
            >
              CSS
            </motion.div>
            <motion.div
              className='about-intro__text__cards__item'
              variants={flipCardVariants}
            >
              JavaScript
            </motion.div>
            <motion.div
              className='about-intro__text__cards__item'
              variants={flipCardVariants}
            >
              Java
            </motion.div>
            <motion.div
              className='about-intro__text__cards__item'
              variants={flipCardVariants}
            >
              C++
            </motion.div>
            <motion.div
              className='about-intro__text__cards__item'
              variants={flipCardVariants}
            >
              Python
            </motion.div>
          </div>
        </motion.div>

        <motion.div className='about-intro__img' variants={introImgVariants}>
          <img src={`${imgPath}/assets/me.jpg`} alt='selfie' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
