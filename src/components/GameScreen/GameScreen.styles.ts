const gameScreen__level: Object = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

export default {
  gameScreen__ctnr: {
    width: "100%",
    height: "100%",
    position: "relative"
  },
  gameScreen__level0: Object.assign({}, gameScreen__level, {
    transform: "scale(0.84)",
    opacity: 1
  }),
  gameScreen__level1: Object.assign({}, gameScreen__level, {
    transform: "scale(0.92)",
    opacity: 0.9
  }),
  gameScreen__level2: Object.assign({}, gameScreen__level, {
    opacity: 0.9
  })
};
