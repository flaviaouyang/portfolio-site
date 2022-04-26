import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const ExpandedIcon = (props) => {
  return <div className="expanded-icon">{props.icon}</div>;
};

const Technology = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="reset-this"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <ExpandedIcon icon="-" />
            ) : (
              <ExpandedIcon icon="+" />
            )
          }
          className="accordion-item"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            className="accordion-title"
          >
            001
          </Typography>
          <Typography className="accordion-title">
            React, JavaScript, HTML, and CSS
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            I have three years of experience with JS, HTML & CSS, and one year
            of experience with React.js. While I enjoy the flexibility and
            freedom that vanilla JavaScript offers, I am currently spending more
            time to explore and learn React. Some projects I've built using
            React includes: McGill TA Management System, this portfolio, and a
            number of freelance landing pages I've done for local businesses.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="reset-this"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <ExpandedIcon icon="-" />
            ) : (
              <ExpandedIcon icon="+" />
            )
          }
          className="accordion-item"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            className="accordion-title"
          >
            002
          </Typography>
          <Typography className="accordion-title">
            Node.js, Express.js, SQL, Mongo DB
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            Even though I more often work with frontend, I still enjoy
            developing full stack applications. I have experiences designing and
            developing relational databases, as well as NoSQL databases. While I
            understand I'm still a rookie when it comes to backend development,
            I'm not intimidated by new technologies which is why I'm constantly
            taking on projects to learn more about building sophisticated and
            reliable full stack web applications.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="reset-this"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <ExpandedIcon icon="-" />
            ) : (
              <ExpandedIcon icon="+" />
            )
          }
          className="accordion-item"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            className="accordion-title"
          >
            003
          </Typography>
          <Typography className="accordion-title">
            Python, Flask, Django
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            Python is not really my first choice of tech stack for web
            development. However, I have built websites using Flask and Django
            before. I enjoy using Python for automation scripts, exploring
            machine learning, and building quick passion projects, like a wordle
            clone. Recently, I've also started to do web scraping with Python.
            In total, I have 4 years of experience with this language.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="reset-this"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel4" ? (
              <ExpandedIcon icon="-" />
            ) : (
              <ExpandedIcon icon="+" />
            )
          }
          className="accordion-item"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            className="accordion-title"
          >
            004
          </Typography>
          <Typography className="accordion-title">Java, C++, C</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            Java was the very first language I learned. It is also one of the
            languages that I know best. I enjoy the robustness it offers while
            still remaining relatively intuitive to use. When I build Java
            applications, I always keep in mind the principles of Object
            Oriented Programming. My experiences with C and C++ are limited.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="reset-this"
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel5" ? (
              <ExpandedIcon icon="-" />
            ) : (
              <ExpandedIcon icon="+" />
            )
          }
          className="accordion-item"
        >
          <Typography
            sx={{ width: "33%", flexShrink: 0 }}
            className="accordion-title"
          >
            005
          </Typography>
          <Typography className="accordion-title">Others</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            Beyond the aforementioned technologies, here are some other things
            that I know (or am learning): three.js, GSAP, and WebGL, PHP, Bash,
            Git & GitHub, Bootstrap & Tailwind, Docker, Figma & Adobe XD. I
            usually work with MacOS. My editor of choice is Visual Studio Code.
            For IDEs, I have worked with IntelliJ, Eclipse, PHPStorm, PyCharm and CLion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Technology;
