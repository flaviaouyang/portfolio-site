const WritingItem = (props) => {
  return (
    <div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div class="blog-item sweep-to-top">
          <p class="blog-title">{props.header}</p>
          <p class="blog-content">{props.text}</p>
        </div>
      </a>
    </div>
  );
};

export default WritingItem;