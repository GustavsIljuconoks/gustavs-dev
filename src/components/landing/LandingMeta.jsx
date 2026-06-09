import { BsGithub, BsLinkedin } from "react-icons/bs";

import { socialLinks } from "../../constants/landing";
import XIcon from "./XIcon";

const socialIconMap = {
    x: XIcon,
    github: BsGithub,
    linkedin: BsLinkedin,
};

const LandingMeta = () => (
    <>
        <div className="social-links" aria-label="Social links">
            {socialLinks.map((item) => {
                const Icon = socialIconMap[item.icon];

                return (
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        key={item.name}
                    >
                        {Icon && <Icon aria-hidden="true" />}
                        {item.name}
                    </a>
                );
            })}
        </div>
    </>
);

export default LandingMeta;
