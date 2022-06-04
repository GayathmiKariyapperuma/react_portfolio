import "./projects.css";

const Projects = () => {
  return (
    <div id="projects" className="container projects-container">
      <h1 className="project-txt">My Projects</h1>
      <div className="project project-1">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">Chrys</h1>
          <h3 className="position">Leader</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-project">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="project project-2">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">CChrys</h1>
          <h3 className="position">Another Leader</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-project">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="project project-3">
        <div className="project-img"></div>
        <div className="project-info">
          <h1 className="name">CCChrys</h1>
          <h3 className="position">Another Leader Again</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-project">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
