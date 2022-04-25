import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0 0 .8rem rgb(255, 255, 255)',
    boxShadow: '0 0 .8rem rgb(255, 255, 255)',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.3,
    },
  },
};

const Home = () => {
  const btnOnClick = () => {
    const el = document.querySelector(`#projects`);

    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

  return (
    <div id='home' className='home'>
      <h1 className='heading heading--home'>
        Hello, I'm <span>Scott Zhu</span>. <br />
        I'm a front-end web developer.
      </h1>
      <motion.button
        className='btn btn--home'
        variants={buttonVariants}
        whileHover='hover'
        onClick={() => {
          btnOnClick();
        }}
      >
        View my work
      </motion.button>
    </div>
  );
};

export default Home;
