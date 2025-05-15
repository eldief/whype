export const toastAnimation = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

export const progressBarAnimation = {
  initial: { width: '100%' },
  animate: {
    width: '0%',
    transition: { duration: 5, ease: 'linear' },
  },
  exit: { width: '0%' },
}

export const balanceAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
}

export const slideInAnimation = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { duration: 0.2 },
}

export const slideOutAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
  transition: { duration: 0.2 },
}

export const selectorAnimation = {
  initial: (direction: number) => ({
    x: `${-direction * 50}%`,
    opacity: 1,
  }),
  animate: (direction: number) => ({
    x: `${direction * 50}%`,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  exit: (direction: number) => ({
    x: `${direction * 50}%`,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}
