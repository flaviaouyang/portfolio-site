const CaseStudy = (props) => {
  return (
    <div className="case-container">
      <div className="case-text-container">
        <h1>{props.description}</h1>
        <div className="case-info-container">
          <p className="bold">Basic Information</p>
          <p>ROLE: {props.role}</p>
          <p>YEAR: {props.year}</p>
        </div>
      </div>
      <img src={props.src} alt={props.alt} className="case-img disappear" />
    </div>
  );
};

export default CaseStudy;
