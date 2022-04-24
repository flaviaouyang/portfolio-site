const ProjectItem = (props) => (
  <div className="project-item">
    <a href={props.link} target="_blank" rel="noreferrer">
      <img src={props.img_src} alt={props.alt} className="project-picture"></img>
    </a>
    <a href={props.text_link} target="_blank" rel="noreferrer">
      <p className="project-description sweep-to-top">{props.description}</p>
    </a>
  </div>
);

export default ProjectItem;
