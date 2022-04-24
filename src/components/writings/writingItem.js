const WritingItem = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="blog-item sweep-to-top">
          <p className="blog-title">{props.header}</p>
          <p className="blog-content">{props.text}</p>
        </div>
      </a>
    </div>
  );
};

export default WritingItem;