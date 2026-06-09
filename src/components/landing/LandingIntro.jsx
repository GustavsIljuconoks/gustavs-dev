import { FiArrowRight, FiMail } from "react-icons/fi";

const LandingIntro = () => (
    <>
        <p className="eyebrow">Web developer / Riga, Latvia</p>
        <h1>
            I'm <span>Gustavs</span>
        </h1>
        <p className="landing-lede">
            I build clean web interfaces and practical software tools with a
            simple goal: make the first version feel useful, sharp, and easy to
            improve.
        </p>

        <div className="landing-actions" aria-label="Primary actions">
            <a
                className="button primary"
                href="mailto:gustavs.iljuconoks@gmail.com"
            >
                Start a conversation
                <FiMail aria-hidden="true" />
            </a>
            <a
                className="button secondary"
                href="https://github.com/GustavsIljuconoks"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
                <FiArrowRight aria-hidden="true" />
            </a>
        </div>
    </>
);

export default LandingIntro;
