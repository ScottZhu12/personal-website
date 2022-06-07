import { motion } from 'framer-motion';

import { imgPath } from '../../variables';
import { headingRightVariants } from '../../variables';
import { lineRightVariants } from '../../variables';
import ProjectsCard from '../ProjectsCard';

const projectsContentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

const Projects = ({ reference }) => {
  return (
    <div ref={reference} id='projects' className='projects'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-200px' }}
      >
        <motion.h2
          className='heading heading--projects'
          variants={headingRightVariants}
        >
          PROJECTS <br />
          <motion.span
            className='underline'
            variants={lineRightVariants}
          ></motion.span>
        </motion.h2>
      </motion.div>

      <motion.div
        className='projects-content'
        variants={projectsContentVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-350px' }}
      >
        <ProjectsCard
          cardImg={`${imgPath}/assets/todo-list.png`}
          cardHeading='Todo List App'
          cardParagraph='React Js / Redux Toolkit'
          cardLink='https://scottzhu-todo-list.netlify.app/'
        />

        <ProjectsCard
          cardImg={`${imgPath}/assets/blog-app.png`}
          cardHeading='Blog App'
          cardParagraph='React Js / Redux Toolkit'
          cardLink='https://scottzhu-blog-async-v2.netlify.app/'
        />

        <ProjectsCard
          cardImg={`${imgPath}/assets/tip-calculator.png`}
          cardHeading='Tip Calculator'
          cardParagraph='React JS / Redux'
          cardLink='https://tip-calculator-app-scottzhu.netlify.app/'
        />
        <ProjectsCard
          cardImg={`${imgPath}/assets/github-user-search.png`}
          cardHeading='Github User Search'
          cardParagraph='React JS / Redux'
          cardLink='https://github-user-search-scottzhu.netlify.app/'
        />
        <ProjectsCard
          cardImg={`${imgPath}/assets/time-tracking-app.png`}
          cardHeading='Time Tracking App'
          cardParagraph='React JS / Redux'
          cardLink='https://time-tracking-dashboard-scottzhu.netlify.app/'
        />
        <ProjectsCard
          cardImg={`${imgPath}/assets/advice-generator.png`}
          cardHeading='Advice Generator'
          cardParagraph='React JS / Redux'
          cardLink='https://advice-generator-app-scottzhu.netlify.app/'
        />
      </motion.div>
    </div>
  );
};

export default Projects;
