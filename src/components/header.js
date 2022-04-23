import { Routes, Route, Link } from "react-router-dom";

const LogoText = (props) => {
  return (
    <div>
      <p className="logo-text">{props.text}</p>
    </div>
  );
};

const LogoLinks = () => {
  return (
    <div className="logo-links">
      <Link to=".">I. My background and experience&#8599;</Link>
      <Link to="technology">II. WHAT TECHNOLOGY DO I KNOW?&#8594;</Link>
      <Link to="hobby">III. Some other things that i enjoy&#8600;</Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className="nav-container">
      <Routes>
        <Route index element={<LogoText text="FLAVIA Y. OUYANG" />} />
        <Route path="about/*" element={<LogoLinks />} />
        <Route path="project" element={<LogoText text="SELECTED WORKS" />} />
        <Route
          path="writing"
          element={<LogoText text="SOME OF MY WRITINGS" />}
        />
        <Route path="contact" element={<LogoText text="SAY HI! WHY NOT?" />} />
      </Routes>
      <div className="nav-link-container">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/project">WORK</Link>
        <Link to="/writing">WRITINGS</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;
