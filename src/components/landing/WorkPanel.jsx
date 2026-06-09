import { FiExternalLink } from "react-icons/fi";

import { landingProjects } from "../../constants/landing";

const WorkPanel = () => (
    <div className="work-panel">
        <div className="panel-head">
            <span>Selected work</span>
            <a
                href="https://github.com/GustavsIljuconoks"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
            >
                <FiExternalLink aria-hidden="true" />
            </a>
        </div>

        {landingProjects.map((project, index) => (
            <a
                className="work-row"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={project.name}
            >
                <img src={project.image} alt={`${project.name} preview`} />
                <div>
                    <span>
                        0{index + 1} / {project.type}
                    </span>
                    <strong>{project.name}</strong>
                    <p>{project.description}</p>
                </div>
            </a>
        ))}
    </div>
);

export default WorkPanel;
