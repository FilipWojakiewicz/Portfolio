import './index.scss'
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles 
        id="tsparticles" 
        init={particlesInit} 
        options={{
            fullScreen: {
                enable: false
              },
            fpsLimit: 30,
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 40,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: false,
                        area: 150,
                    },
                    value: 200,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "triangle",
                },
                size: {
                    value: { min: 0.1, max: 3 },
                },
            },
            detectRetina: true,
        }}
        />
    )
};

export default Particle