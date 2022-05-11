const Contact = () => {
  return (
    <div className="contact-container">
      <a href="mailto:hello@flaviaouyang.com" className="link">
        Hello@emailme.com
      </a>
      <div className="link-container">
        <a
          href="https://twitter.com/flaviaouyang"
          target="_blank"
          rel="noreferrer"
        >
          TWITTER ↗
        </a>
        <a
          href="https://github.com/flaviaouyang"
          target="_blank"
          rel="noreferrer"
        >
          GITHUB ↗
        </a>
        <a
          href="https://www.linkedin.com/in/flavia-ouyang/"
          target="_blank"
          rel="noreferrer"
        >
          LINKEDIN ↗
        </a>
      </div>
    </div>
  );
};

export default Contact;
