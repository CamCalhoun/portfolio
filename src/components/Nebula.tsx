
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
        background: {
            image: "radial-gradient(rgba(0, 229, 105, 0.25), #000)"
        },
        fpsLimit: 240,
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        particles: {
            color: {
                value: ["#00e569", "#00ffcc", "#b2fefa"], // Nebula-like colors
            },
        },

    }), []);

    return init ? (
        <Particles id="tsparticles" options={options} />
    ) : null;
};

export default Nebula;

