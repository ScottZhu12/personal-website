import { motion } from 'framer-motion';

const listItemVariants = {
  hover: {
    scale: 1.05,
    color: '#e31b6d',
    y: '-.3rem',
  },
};

const itemOnClick = (name) => {
  const elName = name.toLowerCase();
  const el = document.querySelector(`#${elName}`);

  if (!el) return;

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
};

const Navigation = ({ aboutInView }) => {
  const navList = ['HOME', 'ABOUT', 'PROJECTS', 'BLOG', 'CONTACT'];

  const renderNavList = navList.map((item) => {
    const className = `navigation-list__item ${
      aboutInView ? 'navigation-list__item-red' : ''
    }`;

    return (
      <motion.li
        key={item}
        className={className}
        variants={listItemVariants}
        whileHover='hover'
        onClick={() => itemOnClick(item)}
      >
        {item}
      </motion.li>
    );
  });

  return (
    <div className='navigation'>
      <ul className='navigation-list'>{renderNavList}</ul>
    </div>
  );
};

export default Navigation;
