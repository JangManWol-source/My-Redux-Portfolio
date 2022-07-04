const variants = {
    initial: {
      x: '-100ch',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .3
      }
    },
    exit: {
      x: '100ch',
      opacity: 0
    }
  }

  export default variants