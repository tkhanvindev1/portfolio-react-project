import Project from "./Project/Project";


function Projects (projects) {
    return(
        <div className="row">
          <Project project={projects.projects[0]}/>
          <Project project={projects.projects[0]}/>
          <Project project={projects.projects[0]}/>
          <Project project={projects.projects[0]}/>
        </div>
    )
}

export default Projects;