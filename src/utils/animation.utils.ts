export const bounceAnimation = {
  old: {
    name: "slide-up",
    duration: "0.3s",
    easing: "linear",
    fillMode: "ease-out",
  },
  new: {
    name: "slide-down", // same name as the keyframe in layouts/Main
    duration: "0.3s",
    easing: "ease-out",
    fillMode: "forwards",
  },
};

export const bounce = {
  forwards: bounceAnimation,
  backwards: bounceAnimation,
};

export const animateInAnimation = {
  old: {
    name: "animate-in", // same name as the keyframe in layouts/Main
    duration: "0.3s",
    easing: "linear",
    fillMode: "forwards",
  },
  new: {
    name: "animate-in",
    duration: "0.3s",
    easing: "linear",
    fillMode: "backwards",
  },
};

export const animateIn = {
  forwards: animateInAnimation,
  backwards: animateInAnimation,
};
