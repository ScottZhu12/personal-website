import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cardDeatailVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const cardHeadingVariants = {
  hidden: {
    y: '-200px',
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
};

const cardBtnVariants = {
  hidden: {
    y: '200px',
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
  hover: {
    color: '#fff',
    backgroundColor: '#e31b6d',
    borderColor: '#fff',
  },
};

const ProjectsCard = ({ cardImg, cardHeading, cardParagraph }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div
      className='projects-card'
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
    >
      {!showDetail && (
        <motion.div
          className='projects-card--preview'
          variants={cardDeatailVariants}
          initial='hidden'
          animate='visible'
        >
          <img src={cardImg} alt='tip-calculator' />
        </motion.div>
      )}
      {showDetail && (
        <motion.div
          className='projects-card--detail'
          variants={cardDeatailVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h3
            className='heading heading--projects-card'
            variants={cardHeadingVariants}
          >
            {cardHeading}
          </motion.h3>
          <motion.div
            className='paragraph paragraph--projects-card'
            variants={cardHeadingVariants}
          >
            {cardParagraph}
          </motion.div>
          <motion.button
            className='btn btn--projects-card'
            variants={cardBtnVariants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectsCard;
