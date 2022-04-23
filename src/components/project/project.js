import ProjectItem from "./projectItem";

// import project images
import etch from "../../asset/etch-a-sketch.png";
import toDo from "../../asset/to-do.png";
import wordle from "../../asset/wordle.png";
import sf from "../../asset/sf.png";
import ta from "../../asset/ta-management.png";

const Project = () => {
    return (
      <div class="project-container" id="project">
        <div class="project-banner-container">
          <p class="project-banner-text-1">SELECTED</p>
          <p class="project-banner-text-2">WORKS &nbsp;&nbsp;</p>
        </div>
        <ProjectItem
          link="https://front-end-28x.pages.dev/"
          img_src={ta}
          alt="McGill TA Management System"
          text_link="https://github.com/COMP307-final-project-W2022"
          description="Responsive Full Stack Application for McGill users +"
        />
        <ProjectItem
          link="https://github.com/flaviaouyang/Sages-Femmes-du-Quebec-Database"
          img_src={sf}
          alt="Database Application"
          text_link="https://github.com/flaviaouyang/Sages-Femmes-du-Quebec-Database"
          description="Database Application for Midwife program in Quebec +"
        />
        <ProjectItem
          link="https://github.com/flaviaouyang/python-CLI-wordle"
          img_src={wordle}
          alt="CLI Wordle Game"
          text_link="https://github.com/flaviaouyang/python-CLI-wordle"
          description="CLI Wordle Clone written in pure Python +"
        />
        <ProjectItem
          link="https://flaviaouyang.github.io/etch-a-sketch/"
          img_src={etch}
          alt="UI of etch-a-sketch project"
          text_link="https://github.com/flaviaouyang/etch-a-sketch"
          description="built with vanilla JavaScript +"
        />
        <ProjectItem
          link="https://github.com/flaviaouyang/brutally-minimalistic-to-do"
          img_src={toDo}
          alt="UI of to do list"
          text_link="https://github.com/flaviaouyang/brutally-minimalistic-to-do"
          description="Hour Project for learning Flask and Jinja +"
        />
      </div>
    );
  };

  export default Project;