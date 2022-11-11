import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail/ProjectDetail";
import Modal from "./Modal/Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};
const BUTTON_STYLES = {
  width: "250px",
  fontSize: "32px",
  marginBottom: "25px",
};

function Project(project) {
  const { id, project_name, body } = project.project;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="column" id={id}>
      <div className="portfolio-item">
        <a className="portfolio-link">
          <img src="data:image/jpeg;base64,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"></img>
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{project_name}</div>
          <div className="portfolio-caption-subhead">{body}</div>
        </div>
      </div>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)} style={BUTTON_STYLES}>
          Open Modal
        </button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          styles={BUTTON_STYLES}
        >
          {/* ProjectDetail as a children */}
          <ProjectDetail project={project}/>
        </Modal>
      </div>
    </div>
  );
}
export default Project;
