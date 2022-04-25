import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    textShadow: '0 0 .8rem rgb(255, 255, 255)',
    boxShadow: '0 0 .8rem rgb(255, 255, 255)',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.3,
    },
  },
};

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        Scott Zhu &copy;2022
        <motion.div
          className='top'
          variants={buttonVariants}
          whileHover='hover'
          onClick={() => {
            const el = document.querySelector(`#home`);

            if (!el) return;

            el.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
            });
          }}
        >
          &#8657;
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
