import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { memo } from "react";
import { Container, Engine } from "tsparticles-engine";
import "./RscRocket.scss";

const RscRocket: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    console.log(main);

    // Loads tsparticles package bundle
    await loadFull(main);
  };
  const particlesLoaded = (container?: Container): Promise<void> => {
    const a = Promise.resolve();
    return a.then(() => {
      console.log("LOADED", container);
    });
  };

  return (
    <div className="rocket-container">
      <Particles
        id="rocket-bg"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ position: "absolute" }}
        canvasClassName="canvas-particles"
        options={{
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
        }}
      />
      <div className="rocket">
        <div className="rocket-body">
          <div className="body" />
          <div className="fin fin-left" />
          <div className="fin fin-right" />
          <div className="window">
            <div className="alien">
              <div className="eye eye-left" />
              <div className="eye eye-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RscRocket);
