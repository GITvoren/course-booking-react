import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/hero.css";

const features = [
  { label: "Learn at your pace", icon: "laptop" },
  { label: "Hands-on projects", icon: "monitor" },
  { label: "Get certified", icon: "trophy" },
];

function FeatureIcon({ type }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "laptop":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="12" rx="1.5" />
          <path d="M2 19h20l-2-3H4l-2 3Z" />
        </svg>
      );

    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M12 17v3m-4 0h8" />
          <circle cx="12" cy="10.5" r="2.2" />
        </svg>
      );

    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
          <path d="M8 6H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4M12 13v4m-4 3h8m-6-3h4" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">LEARN / BUILD / GROW</p>

          <h1 className="hero__title">
            Turn Your Ideas
            <br />
            Into <span>Real Code</span>
          </h1>

          <p className="hero__description">
            Practical, project-based coding courses for
            <br className="hero__desktop-break" />
            beginners and aspiring developers. Build real skills,
            <br className="hero__desktop-break" />
            create amazing projects, and take your career further.
          </p>

          <div className="hero__actions">
            <Link
              className="hero__button hero__button--primary"
              to="/courses"
            >
              <span>Start Learning</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>

            <Link
              className="hero__button hero__button--secondary"
              to="/courses"
            >
              Browse Courses
            </Link>
          </div>

          <ul className="hero__features">
            {features.map((feature) => (
              <li className="hero__feature" key={feature.label}>
                <span className="hero__feature-icon">
                  <FeatureIcon type={feature.icon} />
                </span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          {/* Replace the src with your IDE image path. */}
          <img
            className="hero__image"
            src="/images/ide-preview.png"
            alt="Code editor interface preview"
          />
        </div>
      </div>
    </section>
  );
}
