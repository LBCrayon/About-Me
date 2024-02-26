import { spaceGrotesk } from "../fonts/spaceGrotesk";
import { motion } from "framer-motion";
import Logo from "../components/svg/Logo";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";

const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />
            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
                <div
                    className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
                >
                    <span className="text-8xl font-bold">Pham Tran Le Bao</span>
                    <span className="text-4xl font-bold">Front End Developer</span>
                    <span className="text-4xl font-bold">Welcome to my website!</span>
                </div>
            </div>
        </motion.section>
    );
};


export default Hero;
