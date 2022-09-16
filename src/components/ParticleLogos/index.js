import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import atom from "../../assets/Logos/atom.png";
import ht from "../../assets/Logos/html.png";
import cs from "../../assets/Logos/css.png";
import csharp from "../../assets/Logos/c-sharp.png";
import net from "../../assets/Logos/net.png";
import sql from "../../assets/Logos/sql.png";
import git from "../../assets/Logos/git.png";
import sass from "../../assets/Logos/sass.png";
import github from "../../assets/Logos/github.png";

const ParticleLogos = () => {
    const imagesT = [atom, ht, cs, csharp, net, sql, git, sass, github]
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            className='tsparticles3'
            id="tsparticles3"
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={{
                backgroundMode: {
                  enable: true,
                  zIndex: -1
                },
                fpsLimit: 60,
                detectRetina: true,
                  particles: {
                    number: {
                      value: 60,
                      density: {
                        enable: true,
                        value_area: 700
                      }
                    },move: {
                      attract: { enable: false, rotateX: 600, rotateY: 1200 },
                      direction: "random",
                      enable: true,
                      outMode: "out",
                      random: false,
                      size: true,
                      speed: 1,
                      straight: false
                    },
                    line_linked: {
                      enable: false
                    },
                    
                    shape: {
                      type: ["images"],

                      images: imagesT.map(img => ({
                        src: img,
                        height: 100,
                        width: 100
                      }))
                    },
                    color: {
                      value: "#000000"
                    },
                    size: {
                      value: 30,
                      random: false,
                      anim: {
                        enable: true,
                        speed: 4,
                        size_min: 10,
                        sync: false
                      }
                    }
                  }
              }}
        />
      );
};

export default ParticleLogos