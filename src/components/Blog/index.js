import { motion } from 'framer-motion';

import { headingVariants } from '../../variables';
import { lineVariants } from '../../variables';
import { imgPath } from '../../variables';
import BlogPost from '../BlogPost';

const blogVariants = {
  hidden: {
    opacity: 0,
    y: '10rem',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Blog = () => {
  return (
    <div id='blog' className='blog'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-200px' }}
      >
        <motion.h2 className='heading heading--blog' variants={headingVariants}>
          BLOG <br />
          <motion.span
            className='underline'
            variants={lineVariants}
          ></motion.span>
        </motion.h2>
      </motion.div>

      <motion.div
        className='blog-content'
        variants={blogVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-200px' }}
      >
        <BlogPost
          blogImg={`${imgPath}/assets/blog-image-1.jpg`}
          blogHeading='Handling Forms with React Final Form'
          blogTime='March 09, 2022'
        />
        <BlogPost
          blogImg={`${imgPath}/assets/blog-image-2.jpg`}
          blogHeading='Navigation with React Router'
          blogTime='February 18, 2022'
        />
        <BlogPost
          blogImg={`${imgPath}/assets/blog-image-3.jpg`}
          blogHeading='Integrating React with Redux'
          blogTime='January 25, 2022'
        />
        <BlogPost
          blogImg={`${imgPath}/assets/blog-image-4.jpg`}
          blogHeading='Create Your Own React Hooks'
          blogTime='DECEMBER 20, 2021'
        />
      </motion.div>
      <div className='envelope'></div>
    </div>
  );
};

export default Blog;
