import { Link } from "react-router-dom";

const BlogItem = (props) => {
  return (
    <div className="sweep-to-right">
      <Link to={props.link}>
        <p>{props.title}</p>
      </Link>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="blog-container">
      <BlogItem link="scss" title="An introduction to SCSS: CSS supercharged" />
      <BlogItem link="vc" title="Version control: a true lifesaver" />
      <BlogItem link="router" title="Routing simplified: React Router DOM" />
    </div>
  );
};
export default Blog;
