export const imgPath = process.env.PUBLIC_URL;

export const headingVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

export const lineVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const headingRightVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

export const lineRightVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
