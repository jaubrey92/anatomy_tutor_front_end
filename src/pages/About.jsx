const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutPage">
        <h1>About Me</h1>
        <img
          src="https://i.ibb.co/Z6WcXGm/Slack-Photo.png"
          alt="Prof Pic"
          className="profPic"
        />
        <p className="aboutParagraph">
          My name is James Aubrey and I am a former physical therapist. During
          PT school, we had to learn a great deal about anatomy. This website is
          designed to help current PT students memorize their OINAs, or origin,
          insertion, innervation, and action, for each muscle they need to learn
          for school. Log in or sign up to get started!
        </p>
        <a className="contactInfo" href="https://github.com/jaubrey92">
          GitHub |{' '}
        </a>{' '}
        <a
          className="contactInfo"
          href="https://www.linkedin.com/in/james-aubrey/"
        >
          {' '}
          | LinkedIn
        </a>
      </div>
      <footer>All Rights Reserved, &copy; 2023 Anatomy Tutor &nbsp;</footer>
    </div>
  )
}

export default About
