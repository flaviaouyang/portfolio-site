import ProjectItem from "./projectItem";

// import project images
import McGill from "../../asset/mcgill.png";
import Database from "../../asset/sage-femme.png";
import Wordle from "../../asset/wordle.png";
import BlackJack from "../../asset/blackjack.png";
import Etch from "../../asset/etch-a-sketch.png";
import ToDo from "../../asset/to-do.jpg";

const Project = () => {
  return (
    <div className="project-container">
      <ProjectItem
        link="https://github.com/COMP307-final-project-W2022"
        img_class="github"
        img_src={McGill}
        alt="McGill TA Management System"
        tech="React, Node, Express, SQL"
        text_link="/project/mcgill"
        description="McGill TA Management System"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/Sages-Femmes-du-Quebec-Database"
        img_class="github"
        img_src={Database}
        alt="Database Application"
        text_link="/project/midwife"
        description="Midwife Database System"
        tech="IBM-DB2, Java"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/python-CLI-wordle"
        img_class="github"
        img_src={Wordle}
        alt="CLI Wordle Game"
        text_link="/project/wordle"
        description="Terminal Wordle CLone"
        tech="Python"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/blackjack-cpp"
        img_class="github"
        img_src={BlackJack}
        alt="Black Jack Cards"
        text_link="/project/blackjack"
        description="C++ BlackJack Game"
        tech="C++"
      />
      <ProjectItem
        link="https://github.com/flaviaouyang/brutally-minimalistic-to-do"
        img_class="github"
        img_src={ToDo}
        alt="To Do illustrations"
        text_link="/project/todo"
        description="Python To-do List"
        tech="Flask, Jinja, SQL"
      />
      <ProjectItem
        link="https://flaviaouyang.github.io/etch-a-sketch/"
        img_class="demo"
        img_src={Etch}
        alt="UI of etch-a-sketch project"
        text_link="/project/etch-a-sketch"
        description="Etch-a-sketch"
        tech="JavaScript, HTML, CSS"
      />
    </div>
  );
};

export default Project;
