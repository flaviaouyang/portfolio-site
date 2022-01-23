import React from "react";
import "./App.css";
import blogPlaceholder from "./blog-placeholder.png";
import etch from "./etch-a-sketch.png";
import toDo from "./to-do.png";

// navigation bar
const Header = () => {
  return (
    <header id="home">
      <div class="header-container">
        <a id="logo" href="#home">
          FLAVIA Y. OUYANG
        </a>
        <div class="nav-parent">
          <nav class="nav-container">
            <a id="nav-link" href="#home">
              HOME
            </a>
            <a id="nav-link" href="#about">
              ABOUT
            </a>
            <a id="nav-link" href="#tech-stack">
              TECH
            </a>
            <a id="nav-link" href="#project">
              PROJECT
            </a>
            <a id="nav-link" href="#blog">
              BLOG
            </a>
            <a id="nav-link" href="#contact">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// home Page
const IntroPage = () => {
  return (
    <div class="intro-container">
      <p>FRONT-END</p>
      <p>WEB DEVELOPER</p>
      <p>BASED IN MONTRÉAL</p>
      <p>CANADA</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div class="about-container" id="about">
      <div class="about-banner-container">
        <p class="about-banner-text">ABOUT</p>
        <p class="about-banner-text">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ME
        </p>
      </div>
      <div class="about-me">
        &emsp;I am a senior computer science student at McGill University.
        <br />
        <br />
        &emsp;I enjoy designing and creating animated & interactive web pages
        and web applications.
      </div>
    </div>
  );
};

const Technology = () => {
  return (
    <div>
      <div class="project-container project-banner-container" id="tech-stack">
        <p class="project-banner-text-1">TECH</p>
        <p class="project-banner-text-2">I KNOW&emsp;&emsp;</p>
      </div>
      <div class="tech-stack">
        <p class="tech-stack-item sweep-to-top tech-1"><span>JS</span></p>
        <p class="tech-stack-item tech-2"><span>React</span></p>
        <p class="tech-stack-item sweep-to-top tech-3"><span>three.js</span></p>
        <p class="tech-stack-item sweep-to-top tech-4"><span>Python</span></p>
        <p class="tech-stack-item tech-5"><span>Flask</span></p>
        <p class="tech-stack-item tech-6"><span>SQL</span></p>
        <p class="tech-stack-item tech-7"><span>Java</span></p>
        <p class="tech-stack-item tech-8"><span>PHP</span></p>
        <p class="tech-stack-item tech-9"><span>HTML &#38; CSS</span></p>
        <p class="tech-stack-item sweep-to-top tech-10"><span>Bash</span></p>
        <p class="tech-stack-item sweep-to-top tech-11"><span>Version Control</span></p>
        <p class="tech-stack-item sweep-to-top tech-12"><span>Figma</span></p>
      </div>
    </div>
  );
};

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

const ProjectPage = () => {
  return (
    <div class="project-container" id="project">
      <div class="project-banner-container">
        <p class="project-banner-text-1">SELECTED</p>
        <p class="project-banner-text-2">WORKS &nbsp;&nbsp;</p>
      </div>
      <ProjectItem
        link="https://flaviaouyang.github.io/etch-a-sketch/"
        img_src={etch}
        alt="UI of etch-a-sketch project"
        text_link="https://github.com/flaviaouyang/etch-a-sketch"
        description="An web application built with vanilla JavaScript +"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/brutally-minimalistic-to-do"
        img_src={toDo}
        alt="UI of to do list"
        text_link="https://github.com/flaviaouyang/brutally-minimalistic-to-do"
        description="A to-do web application built using Flask and Jinja +"
      />
    </div>
  );
};

const BlogPage = () => {
  return (
    <div class="project-container blog-container" id="blog">
      <div class="project-banner-container">
        <p class="project-banner-text-1">BLOG</p>
        <p class="project-banner-text-2">OVERVIEW &nbsp;&nbsp;</p>
      </div>
      <img
        src={blogPlaceholder}
        class="project-text blog-placeholder"
        alt="Under Construction Sign"
      ></img>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div class="project-container blog-container" id="contact">
      <div class="project-banner-container">
        <p class="project-banner-text-1">SAY HI</p>
        <p class="project-banner-text-2">WHY NOT&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="link-container">
        <a href="mailto:flavia.ouyang@mail.mcgill.ca" class="link">
          email
        </a>
        <a
          href="https://twitter.com/FlaviaOuyang"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          twitter ↗
        </a>
        <a
          href="https://github.com/flaviaouyang"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          github ↗
        </a>
        <a
          href="https://www.linkedin.com/in/flavia-ouyang/"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          linkedin ↗
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <p class="design-by">Designed and made by Flavia O.</p>
        <p class="copyright">&copy;All rights reserved</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div>
      <Header />
      <IntroPage />
      <AboutPage />
      <Technology />
      <ProjectPage />
      <BlogPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;