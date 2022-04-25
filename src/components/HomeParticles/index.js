import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const HomeParticles = () => {
  const particlesInit = async (main) => {
    // console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = {
    background: {
      color: '#252934',
    },

    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          area: 700,
        },
      },
      color: {
        value: '#fff',
      },
      shape: {
        type: 'circle',
        options: {
          polygon: {
            sides: 5,
          },
        },
      },
      stroke: {
        width: 0,
        color: '#000',
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: false,
          speed: 0.1,
          startValue: 'min',
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        animation: {
          enable: false,
          speed: 10,
          minimumValue: 0.1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#fff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
    },

    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          lineLinked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
      },
    },

    detectRetina: true,

    fullScreen: {
      enable: false,
    },
  };

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      width='100%'
      height='100%'
    />
  );
};

export default HomeParticles;
