export const titleAnimation = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.5 },
};

export const buttonAnimation = {
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
};

export const slideInRightAnimation = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.5 },
};

export const fadeInAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 3 },
};

export const slideInLeftAnimation = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 1.5 },
};

export const combinedButtonAnimation = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 3 },
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
};

export const linkVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
};
