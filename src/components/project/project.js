import ProjectItem from "./projectItem";

// import project images
import McGill from "../../asset/mcgill.png";
import Database from "../../asset/sage-femme.png";
import Wordle from "../../asset/wordle.png";
import BlackJack from "../../asset/blackjack.png";
import Etch from "../../asset/etch-a-sketch.png";


const Project = () => {
  return (
    <div className="project-container">
      <ProjectItem
        link="https://front-end-28x.pages.dev/"
        img_class="demo"
        img_src={McGill}
        alt="McGill TA Management System"
        tech="React, Node, Express, SQL"
        text_link="#"
        description="McGill TA Management System &#8599;"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/Sages-Femmes-du-Quebec-Database"
        img_class="github"
        img_src={Database}
        alt="Database Application"
        text_link="#"
        description="Midwife Database System &#8599;"
        tech="IBM-DB2, Java"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/python-CLI-wordle"
        img_class="github"
        img_src={Wordle}
        alt="CLI Wordle Game"
        text_link="#"
        description="Terminal Wordle CLone &#8599;"
        tech="Python"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/blackjack-cpp"
        img_class="github"
        img_src={BlackJack}
        alt="Black Jack Cards"
        text_link="#"
        description="C++ BlackJack Game &#8599;"
        tech="C++"
      />
      <ProjectItem
        link="https://flaviaouyang.github.io/etch-a-sketch/"
        img_class="demo"
        img_src={Etch}
        alt="UI of etch-a-sketch project"
        text_link="#"
        description="Etch-a-sketch &#8599;"
        tech="JavaScript, HTML, CSS"
      />
    </div>
  );
};

export default Project;
