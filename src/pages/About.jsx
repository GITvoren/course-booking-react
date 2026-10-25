import '../assets/css/about.css';

function About() {
  return (
    <main className="codelab-about-page">
      <section className="codelab-about-content">
        <span className="codelab-page-eyebrow">
          <span className="codelab-eyebrow-dot" />
          ABOUT CODELAB
        </span>

        <h1>
          A place to <span>learn by building.</span>
        </h1>

        <p className="codelab-about-intro">
          CodeLab is a simple learning platform made to help people explore
          programming, practice new skills, and take their first steps toward
          building real projects.
        </p>

        <div className="codelab-about-rule" />

        <div className="codelab-about-details">
          <article className="codelab-about-item">
            <span className="codelab-about-number">01</span>
            <div>
              <h2>Learn at your pace</h2>
              <p>Explore courses and build your understanding one step at a time.</p>
            </div>
          </article>

          <article className="codelab-about-item">
            <span className="codelab-about-number">02</span>
            <div>
              <h2>Practice with purpose</h2>
              <p>Focus on useful skills that you can apply to your own projects.</p>
            </div>
          </article>

          <article className="codelab-about-item">
            <span className="codelab-about-number">03</span>
            <div>
              <h2>Keep growing</h2>
              <p>Stay curious, keep experimenting, and make progress at your own pace.</p>
            </div>
          </article>
        </div>

        <p className="codelab-about-note">
          Built as a personal project to practice the MERN stack, explore authentication and API routing, and learn how React, Express.js, and MongoDB work together in a full-stack application.
        </p>
      </section>
    </main>
  );
}

export default About;
