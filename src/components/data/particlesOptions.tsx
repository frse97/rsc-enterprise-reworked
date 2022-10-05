/**
 * The particles options used for the space scene
 */
export const particlesRocketSceneOptions = {
  fullScreen: false,
  autoPlay: true,
  fpsLimit: 120,
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: "#fff",
      },
    },

    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: false,
        speed: 2,
        minimumValue: 1,
        startValue: "random",
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 2,
        sync: true,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "top",
      random: true,
      straight: true,
      out_mode: "bounceVertical",
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
