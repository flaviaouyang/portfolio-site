import { Link } from "react-router-dom";

const ProjectItem = (props) => (
  <div className="project-item-container">
    <div>
      <div className="project-description">
        <Link to={props.text_link} className="project-text">
          {props.description}
        </Link>
      </div>
      <p className="project-tech">Development: {props.tech}</p>
    </div>

    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className={props.img_class}
    >
      <img
        src={props.img_src}
        alt={props.alt}
        className="project-picture"
      ></img>
    </a>
  </div>
);

export default ProjectItem;
