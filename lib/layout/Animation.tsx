export const effectColors = `conic-gradient(
  from 0deg,
  #fc1da7 0%,
  #fba506 33%,
  #11d3b6 66%,
  #fc1da7 100%
)`;

const linearInfiniteRotation = {
  rotate: 360,
  transition: {
    repeat: Infinity,
    duration: 20,
    ease: 'linear',
  },
};

const initialAnimatedBorderState = {
  backgroundImage: effectColors,
  backgroundSize: '300% 300%',
  backgroundPosition: '50% 50%',
  rotate: 0,
};

export const buttonLikeComponentMotionProps = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95, rotate: '2.5deg' },
  transition: {
    duration: 0.125,
    ease: 'easeInOut',
  },
};

export const cardBorderMotionProps = {
  initial: 'initial',
  variants: {
    initial: {
      ...initialAnimatedBorderState,
      scale: 10,
    },
    animate: {
      ...linearInfiniteRotation,
    },
  },
};

export const avatarBorderMotionProps = {
  initial: 'initial',
  whileHover: 'hover',
  variants: {
    initial: {
      ...initialAnimatedBorderState,
    },
    hover: {
      ...linearInfiniteRotation,
    },
  },
};
