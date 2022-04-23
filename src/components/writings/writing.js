import WritingItem from "./writingItem";

const Writing = () => {
  return (
    <div class="project-container blog-container" id="blog">
      <div class="project-banner-container">
        <p class="project-banner-text-1">MY</p>
        <p class="project-banner-text-2">WRITINGS&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div class="blog-item-container">
        <WritingItem
          link="https://flaviaouyang.github.io/three.js-journey/"
          header="A three.js journey: an orange cube"
          text="A documentation of my journey to learn three.js. Starting from a spinning orange cube in the middle of a black screen, I'm excited to see how far this journey will take me +"
        />
        <WritingItem
          link="https://flaviaouyang.github.io/web-development-foundation/"
          header="Web Development Foundation"
          text="A collection of notes gathered from when I started learning web development. Content ranges from the basics of version control, the fundamentals of HTML and CSS to an extensive introduction of JavaScript +"
        />
        <WritingItem
          link="https://flaviaouyang.github.io/data-structure-and-algorithms/"
          header="Data Structure and Algorithms"
          text="My personal DSA notes. Compiled from content taught in COMP 250, 251, and 360 at McGill University. It also includes implementation of some concepts in Java and JavaScript +"
        />
        <WritingItem
          link="https://flaviaouyang.github.io/harvard-cs-50/"
          header="Harvard CS50"
          text="Everything related to the popular introduction to cs course taught by David J. Martin. I took this course during sophomore year summer and thoroughly enjoyed it. I'm sharing my notes and source code in hopes of helping someone who's on the same path +"
        />
      </div>
    </div>
  );
};

export default Writing;
