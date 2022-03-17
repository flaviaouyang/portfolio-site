import React from "react";
import Typical from "react-typical";
import "./App.css";
import etch from "./etch-a-sketch.png";
import toDo from "./to-do.png";
import wordle from "./wordle.png";
import sf from "./sf.png";

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
              WRITINGS
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
      <p>Hello, I'm a</p>
      <p class="intro-animation">
        <Typical
          loop={3}
          wrapper="p"
          steps={[
            "Software Engineer",
            1000,
            "Web Developer",
            1000,
            "Student",
            500,
            "Designer",
            500,
            "Coder",
            500,
          ]}
        />
      </p>
      <p>
        BASED IN <span class="title-word">MONTRÉAL</span>
      </p>
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
        &emsp;I am a senior computer science student studying at McGill University. 
        I enjoy designing and developing webpages and web applications to create a dynamic user experience. 
        With a passion for UI effects and animation,
        I am always learning new technologies. 
        At the moment, I am spending some time with three.js and gsap.
        <br />
        <br />
        &emsp;More on the personal side, I'm motivated, self-disciplined and organized.
        And I always like a good challenge. I currently reside in Montreal, but I'm open to relocating anywhere within Canada.
        When I'm not working or coding, I enjoy French cinema, 20th century American literature,
        and going on long, aimless walks around the city.
        <br />
        <br />
        &emsp;If you want to know more about me, you can keep scrolling to find out what technologies I know, my projects, and some of my writings.
      </div>
    </div>
  );
};

const Technology = () => {
  return (
    <div>
      <div class="project-container project-banner-container" id="tech-stack">
        <p class="project-banner-text-1">TECH</p>
        <p class="project-banner-text-2">STACK&emsp;&emsp;</p>
      </div>
      <div class="tech-stack">
        <p class="tech-stack-item">
          <span>JS</span>
        </p>
        <p class="tech-stack-item">
          <span>React</span>
        </p>
        <p class="tech-stack-item">
          <span>three.js</span>
        </p>
        <p class="tech-stack-item">
          <span>Python</span>
        </p>
        <p class="tech-stack-item">
          <span>Flask</span>
        </p>
        <p class="tech-stack-item">
          <span>SQL</span>
        </p>
        <p class="tech-stack-item">
          <span>Java</span>
        </p>
        <p class="tech-stack-item">
          <span>PHP</span>
        </p>
        <p class="tech-stack-item">
          <span>Node.js</span>
        </p>
        <p class="tech-stack-item">
          <span>C & C++</span>
        </p>
        <p class="tech-stack-item">
          <span>Mongo DB</span>
        </p>
        <p class="tech-stack-item">
          <span>Bash</span>
        </p>
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
        link="https://github.com/flaviaouyang/Sages-Femmes-du-Quebec-Database"
        img_src={sf}
        alt="Database Application"
        text_link="https://github.com/flaviaouyang/Sages-Femmes-du-Quebec-Database"
        description="A Database Application for Midwife program in Quebec +"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/python-CLI-wordle"
        img_src={wordle}
        alt="CLI Wordle Game"
        text_link="https://github.com/flaviaouyang/python-CLI-wordle"
        description="A CLI Wordle Game written in pure Python +"
      />
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

const BlogItems = (props) => {
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

const BlogPage = () => {
  return (
    <div class="project-container blog-container" id="blog">
      <div class="project-banner-container">
        <p class="project-banner-text-1">MY</p>
        <p class="project-banner-text-2">WRITINGS&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="blog-item-container">
        <BlogItems
          link="https://flaviaouyang.github.io/three.js-journey/"
          header="A three.js journey: an orange cube"
          text="A documentation of my journey to learn three.js. Starting from a spinning orange cube in the middle of a black screen, I'm excited to see how far this journey will take me +"
        />
        <BlogItems
          link="https://flaviaouyang.github.io/web-development-foundation/"
          header="Web Development Foundation"
          text="A collection of notes gathered from when I started learning web development. Content ranges from the basics of version control, the fundamentals of HTML and CSS to an extensive introduction of JavaScript +"
        />
        <BlogItems
          link="https://flaviaouyang.github.io/data-structure-and-algorithms/"
          header="Data Structure and Algorithms"
          text="My personal DSA notes. Compiled from content taught in COMP 250, 251, and 360 at McGill University. It also includes implementation of some concepts in Java and JavaScript +"
        />
        <BlogItems
          link="https://flaviaouyang.github.io/harvard-cs-50/"
          header="Harvard CS50"
          text="Everything related to the popular introduction to cs course taught by David J. Martin. I took this course during sophomore year summer and thoroughly enjoyed it. I'm sharing my notes and source code in hopes of helping someone who's on the same path +"
        />
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div class="project-container contact-container" id="contact">
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
