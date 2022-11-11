import "./ProjectDetail.css"



function ProjectDetail({ project }) {
    console.log (project.project)
    const {technologies,idea,about,challenge}=project.project
    return (
      <div className="wrapper">
        <div className="project-detail">
          <span className="header-text">Tecnologies: </span>
          <span className="text-content">{technologies}</span>
        </div>
        <div className="project-detail">
          <span className="header-text">Idea: </span>
          <span className="text-content">{idea}</span>
        </div>
        <div className="project-detail">
          <span className="header-text">About project: </span>
          <div className="text-content">{about}</div>
        </div>
        <div className="project-detail">
          <span className="header-text">Biggest challenge: </span>
          <div className="text-content">{challenge}</div>
        </div>
      </div>
    );
  }
  export default ProjectDetail;