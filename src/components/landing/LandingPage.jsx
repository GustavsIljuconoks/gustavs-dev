import { motion } from "framer-motion";

import { landingFadeUp, landingStagger } from "../../utils/landingMotion";
import LandingIntro from "./LandingIntro";
import LandingMeta from "./LandingMeta";
import LandingVisual from "./LandingVisual";

const LandingPage = () => (
    <main className="site-shell is-one-frame">
        <motion.section
            className="landing-frame"
            variants={landingStagger}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="landing-copy" variants={landingFadeUp}>
                <LandingIntro />
            </motion.div>

            <motion.aside
                className="landing-visual"
                variants={landingFadeUp}
                aria-label="Selected work"
            >
                <LandingVisual />
            </motion.aside>

            <motion.div className="landing-meta" variants={landingFadeUp}>
                <LandingMeta />
            </motion.div>
        </motion.section>
    </main>
);

export default LandingPage;
