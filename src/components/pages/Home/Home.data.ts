/**
 * The particles options used for the main home background
 */
export const homeParticlesOptions = {
  fullScreen: false,
  autoPlay: false,
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "edge",
      stroke: {
        width: 1,
        color: "#fff",
      },
    },

    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        minimumValue: 1,
        startValue: "random",
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 2,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#fff",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: false,
    },
  },
  retina_detect: true,
};
