
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFirePreset } from "@tsparticles/preset-fire";

const Nebula = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFirePreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
        preset: "fire",
        fpsLimit: 240,
        detectRetina: true,

        interactivity: {
            detectsOn: "screen",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 500,
                    duration: 0.4
                },
                grab: { distance: 150 }
            },
        },

        background: {
            image: "radial-gradient(ellipse, rgba(0,229,105,0.3) 0%, rgba(0,229,105,0.25) 30%, rgba(0,229,105,0.15) 60%, rgba(0,229,105,0.05) 80%, #121212 100%)"
        },



        particles: {
            color: {
                value: ["#00e569", "#00ffcc", "#b2fefa"], // Nebula-like colors
            },
            move: {
                speed: 1,
            },
            number: {
                value: 250,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
        },

    }), []);

    return init ? (
        <Particles
            id="tsparticles"
            options={options}
        />
    ) : null;
};

export default Nebula;
