import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { memo } from "react";
import { Container, Engine } from "tsparticles-engine";
import { Link } from "react-router-dom";
import { rscRoutes } from "../../shared";
import "./RscParticles.scss";

const RscParticles: React.FC = () => {
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
    <div className="particles-container">
      <Particles
        id="tsparticles"
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
              value: 200,
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
                enable: false,
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
              direction: "inside",
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
        }}
      />
      <div className="services-call">
        <Link to={rscRoutes.services.url}>
          <button>Explore Services</button>
        </Link>
      </div>
    </div>
  );
};

export default memo(RscParticles);
