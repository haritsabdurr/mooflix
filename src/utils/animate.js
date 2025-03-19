export const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.2,
    },
    display: 'block',
  },
  exit: {
    opacity: 0,
    rotateX: -19,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};
