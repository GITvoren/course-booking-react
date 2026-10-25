import React from "react";
import "../assets/css/getstartedbanner.css";

export default function GetStartedBanner({
  eyebrow = "Ready to Start?",
  title = "Build Your Future with CodeLab",
  description = "Join now and get instant access to all courses.",
  buttonText = "Get Started",
  onGetStarted,
  href = "/account/login",
}) {
  return (
<div className="get-started-banner__container">
     <section className="get-started-banner">
      <div className="get-started-banner__content">
        <span className="get-started-banner__eyebrow">
          {eyebrow}
        </span>

        <h2 className="get-started-banner__title">
          {title}
        </h2>

        <p className="get-started-banner__description">
          {description}
        </p>
      </div>

      <div className="get-started-banner__action">
        {onGetStarted ? (
          <button
            type="button"
            className="get-started-banner__button"
            onClick={onGetStarted}
          >
            <span>{buttonText}</span>

            <span
              className="get-started-banner__arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        ) : (
          <a
            className="get-started-banner__button"
            href={href}
          >
            <span>{buttonText}</span>

            <span
              className="get-started-banner__arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        )}

        <div
          className="get-started-banner__decoration"
          aria-hidden="true"
        >
          {/* Placeholder for the supplied decorative graphic */}
        </div>
      </div>
    </section>
</div>
    
  );
}