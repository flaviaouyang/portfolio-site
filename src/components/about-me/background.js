import CV from "../../asset/Flavia_Ouyang_CV.pdf";

const Background = () => {
  return (
    <div className="about-text">
      &emsp;I graduated with a Bachelor of Science in computer science from{" "}
      <a href="https://www.mcgill.ca/">McGill University</a> in 2022. I also
      pursued a double minor in Philosophy and Entrepreneurship.
      <br />
      &emsp; When it comes to coding, I{" "}
      <span className="red-text">
        enjoy designing and developing web applications
      </span>{" "}
      to create a dynamic user experience. With a passion for UI effects and
      animation, I am always exploring technologies like three.js, WebGL, and
      GSAP.
      <br />
      &emsp;Currently, I'm residing in Montreal. But I'm{" "}
      <span className="red-text">open to relocation</span>.
      <br />
      &emsp;Beyond academics, I was VP Marketing at Trek for Teens, a Tutor for
      CSUS helpdesk, and a dedicated Mentor under Youth Outreach Program.
      <br />
      &emsp;Looking for my resume?{" "}
      <a href={CV} target="__blank" rel="noreferrer">
        Here you go.
      </a>
    </div>
  );
};

export default Background;
