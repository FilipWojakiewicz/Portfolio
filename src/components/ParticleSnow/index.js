import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './index.scss'

const ParticleSnow = () => {

        const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
          className='tsparticles2'
          id="tsparticles2"
          init={particlesInit} 
        loaded={particlesLoaded} 
          options={{
            backgroundMode: {
              enable: true,
              zIndex: -10000
            },
            fpsLimit: 30,
            interactivity: {
              detectsOn: "canvas",
            },
            particles: {
              color: { value: "#fff" },
              links: {
                color: "#ffffff",
                distance: 500,
                enable: false,
                opacity: 0.4,
                width: 2
              },
              move: {
                // attract: { enable: false, rotateX: 600, rotateY: 1200 },
                direction: "bottom",
                enable: true,
                outMode: "out",
                random: false,
                size: true,
                speed: 2,
                straight: false
              },
              number: { density: { enable: true, area: 800 }, value: 100 },
              opacity: {
                random: true,
                value: 0.2
              },
              shape: {
                type: "circle"
              },
              size: {
                random: true,
                value: 30
              }
            },
            detectRetina: true
          }}
        />
      );
};

export default ParticleSnow