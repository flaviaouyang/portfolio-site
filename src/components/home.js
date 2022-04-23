import Typical from "react-typical";

const Home = () => {
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

export default Home;
