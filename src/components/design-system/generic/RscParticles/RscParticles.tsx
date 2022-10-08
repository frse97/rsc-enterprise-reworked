import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { memo } from "react";
import { Container, Engine } from "tsparticles-engine";
import "./RscParticles.scss";

/**
 * The properties for the IRscParticles component
 */
interface IRscParticles {
  /**
   * The options to pass to the particle component
   */
  options: any;
}

const RscParticles: React.FC<IRscParticles> = (props) => {
  const { options } = props;

  const particlesInit = async (main: Engine) => {
    // Loads tsparticles package bundle
    await loadFull(main);
  };
  const particlesLoaded = (container?: Container): Promise<void> => {
    const a = Promise.resolve();
    return a.then(() => {});
  };

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ position: "absolute" }}
        canvasClassName="canvas-particles"
        options={options}
      />
    </div>
  );
};

export default memo(RscParticles);
