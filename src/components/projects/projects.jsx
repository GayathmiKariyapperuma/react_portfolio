import "./projects.css";

const Projects = () => {
  return (
    <div>
      <span className="proj-text">My Projects</span>
      <div className="projects-container">
        <div className="projects">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="projects">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="projects">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="projects">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="projects">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="projects">
          <div className="content c-plus-plus"></div>
          <h1>c++</h1>
        </div>
        <div className="projects">
          <div className="content c-sharp"></div>
          <h1>c#</h1>
        </div>
        <div className="projects">
          <div className="content kotlin"></div>
          <h1>kotlin</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
