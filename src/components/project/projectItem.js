const ProjectItem = (props) => (
  <div class="project-item">
    <a href={props.link} target="_blank" rel="noreferrer">
      <img src={props.img_src} alt={props.alt} class="project-picture"></img>
    </a>
    <a href={props.text_link} target="_blank" rel="noreferrer">
      <p class="project-description sweep-to-top">{props.description}</p>
    </a>
  </div>
);

export default ProjectItem;
