import React from "react";
import "../assets/css/learningpath.css";

const learningSteps = [
  {
    id: 1,
    title: "Learn the Basics",
    image: "/images/laptop.png",
    description: (
      <>
        Get familiar with the fundamentals
        <br className="learning-path__desktop-break" />
        and set up your development
        <br className="learning-path__desktop-break" />
        environment.
      </>
    ),
  },
  {
    id: 2,
    title: "Build Projects",
    image: "/images/code.png",
    description: (
      <>
        Apply what you learn by building
        <br className="learning-path__desktop-break" />
        real-world projects, with
        <br className="learning-path__desktop-break" />
        step-by-step guidance.
      </>
    ),
  },
  {
    id: 3,
    title: "Get Support",
    image: "/images/community.png",
    description: (
      <>
        Join a community of learners
        <br className="learning-path__desktop-break" />
        and get help from experienced
        <br className="learning-path__desktop-break" />
        mentors.
      </>
    ),
  },
  {
    id: 4,
    title: "Launch Your Career",
    image: "/images/rocket.png",
    description: (
      <>
        Showcase your portfolio,
        <br className="learning-path__desktop-break" />
        get certified, and take the next
        <br className="learning-path__desktop-break" />
        step in your journey.
      </>
    ),
  },
];

export default function LearningPath() {
  return (
    <section
      className="learning-path"
      aria-labelledby="learning-path-title"
    >
      <header className="learning-path__header">
        <span className="learning-path__eyebrow">
          The Learning Path
        </span>

        <h2
          className="learning-path__title"
          id="learning-path-title"
        >
          From Beginner to Job Ready
        </h2>

        <p className="learning-path__intro">
          Our structured learning path helps you build skills step by step,
          <br className="learning-path__desktop-break" />
          with hands-on projects and expert guidance.
        </p>
      </header>

      <ol className="learning-path__steps">
        {learningSteps.map((step) => (
          <li className="learning-path__step" key={step.id}>
            <div className="learning-path__visual">
              <div className="learning-path__icon-slot">
                <img
                  className="learning-path__icon-image"
                  src={step.image}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>

            <h3 className="learning-path__step-title">
              {step.id}. {step.title}
            </h3>

            <p className="learning-path__description">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}