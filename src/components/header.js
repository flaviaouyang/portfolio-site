import { Routes, Route, Link } from "react-router-dom";

const LogoText = (props) => {
  return (
    <div>
      <p className="logo-text">{props.text}</p>
    </div>
  );
};

const AboutLinks = () => {
  return (
    <div className="logo-links">
      <Link to=".">I. My background and experience</Link>
      <Link to="technology">II. WHAT TECHNOLOGY DO I KNOW?</Link>
      <Link to="hobby">III. Some other things that i enjoy</Link>
    </div>
  );
};

const WritingLinks = () => {
  return (
    <div className="logo-links">
      <Link to=".">I. NOTES</Link>
      <Link to="blog">II. BLOG</Link>
    </div>
  );
};

const Navigation = () => {
  return (
    <div className="nav-link-container">
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/project">WORK</Link>
      <Link to="/writing">WRITINGS</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
};

const Back = (props) => {
  const first = props.first;
  const last = props.last;
  if (!first && !last) {
    return (
      <div className="nav-link-container">
        <Link to="/">HOME</Link>
        <Link to={props.backLink}>GO BACK</Link>
        <Link to={props.nextLink}>NEXT</Link>
      </div>
    );
  } else if (first) {
    return (
      <div className="nav-link-container">
        <Link to="/">HOME</Link>
        <Link to={props.nextLink}>NEXT</Link>
      </div>
    );
  } else if (last) {
    return (
      <div className="nav-link-container">
        <Link to="/">HOME</Link>
        <Link to={props.backLink}>GO BACK</Link>
      </div>
    );
  }
};

const Header = () => {
  return (
    <div className="nav-container">
      <Routes>
        <Route index element={<LogoText text="FLAVIA Y. OUYANG" />} />
        <Route path="about/*" element={<AboutLinks />} />
        <Route path="writing/*" element={<WritingLinks />} />
        <Route path="project" element={<LogoText text="SELECTED WORKS" />} />
        {/* case studies */}
        <Route path="project/*" element={<LogoText text="Case Study" />} />
        <Route path="contact" element={<LogoText text="SAY HI! WHY NOT?" />} />
      </Routes>
      <Routes>
        <Route index element={<Navigation />} />
        <Route
          path="about/*"
          element={<Back first={true} last={false} nextLink="/project" />}
        />
        <Route
          path="project"
          element={
            <Back
              first={false}
              last={false}
              backLink="/about"
              nextLink="/writing"
            />
          }
        />
        <Route
          path="project/*"
          element={<Back first={false} last={true} backLink="/project" />}
        />
        <Route
          path="writing/*"
          element={
            <Back
              first={false}
              last={false}
              backLink="/project"
              nextLink="/contact"
            />
          }
        />
        <Route
          path="writing/blog"
          element={
            <Back
              first={false}
              last={false}
              backLink="/project"
              nextLink="/contact"
            />
          }
        />
        <Route
          path="writing/blog/*"
          element={<Back first={false} last={true} backLink="/writing/blog" />}
        />
        <Route
          path="contact"
          element={<Back first={false} last={true} backLink="/writing" />}
        />
      </Routes>
    </div>
  );
};

export default Header;
