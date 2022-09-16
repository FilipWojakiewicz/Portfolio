import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './index.scss'

const ParticleSnow = () => {
    return (
        <Particles
          className='tsparticles2'
          id="tsparticles2"
          options={{
            // smooth: {
            //   enable: true
              
            // },
            fullScreen: {
              enable: false
            },
            backgroundMode: {
              enable: true,
              zIndex: 1
            },
            fpsLimit: 30,
            particles: {
              color: { value: "#fff" },
              move: {
                direction: "bottom",
                enable: true,
                outMode: "out",
                random: false,
                size: true,
                speed: 2,
                straight: false
              },
              number: { density: { enable: true, area: 800 }, value: 110 },
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