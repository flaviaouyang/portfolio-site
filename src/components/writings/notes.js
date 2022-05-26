import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

import three from "../../asset/three-js-notes.pdf";

const ExpandedIcon = (props) => {
  return <div className="expanded-icon">{props.icon}</div>;
};

const Notes = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion writings">
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
            <a href={three} target="_blank" rel="noreferrer">
              A three.js journey: an orange cube&#8599;
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            A documentation of my journey to learn three.js. Starting from a
            spinning orange cube in the middle of a black screen, I'm excited to
            see how far this journey will take me.
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
            <a
              href="https://flaviaouyang.github.io/web-development/"
              target="_blank"
              rel="noreferrer"
            >
              Web Development&#8599;
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            A collection of notes gathered from when I started learning web
            development. Content ranges from the basics of version control, the
            fundamentals of HTML and CSS to an extensive introduction of
            JavaScript.
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
            <a
              href="https://flaviaouyang.github.io/competitive-programming/"
              target="_blank"
              rel="noreferrer"
            >
              Data Structure and Algorithms&#8599;
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            My personal DSA notes. Compiled from content taught in COMP 250,
            251, and 360 at McGill University. It also includes implementation
            of some concepts in Java and JavaScript.
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
          <Typography className="accordion-title">
            <a
              href="https://flaviaouyang.github.io/python/"
              target="_blank"
              rel="noreferrer"
            >
              Python Complete&#8599;
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-item-description">
          <Typography className="accordion-item-text">
            My personal collection of notes and code examples related to Python.
            Covers Python basics, Object-oriented programming in Python,
            anaconda, regex, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Notes;
