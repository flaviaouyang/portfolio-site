import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header id="home">
        <div class="header-container">
          <a id="logo" href="#home">
            FLAVIA Y. OUYANG
          </a>
          <div class="nav-parent">
            <nav class="nav-container">
              <Link to="/">HOME</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/tech">TECH</Link>
              <Link to="/project">PROJECT</Link>
              <Link to="/writing">WRITINGS</Link>
              <Link to="/contact">CONTACT</Link>
            </nav>
          </div>
        </div>
      </header>
    );
  };

  export default Header;