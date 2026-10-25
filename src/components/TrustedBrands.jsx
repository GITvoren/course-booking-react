import React, { useRef } from "react";
import "../assets/css/trustedbrands.css";

const brands = [
  { name: "Google", image: "/images/brands/google.png" },
  { name: "Microsoft", image: "/images/brands/microsoft.png" },
  { name: "Meta", image: "/images/brands/meta.png" },
  { name: "Amazon", image: "/images/brands/amazon.png" },
  { name: "Spotify", image: "/images/brands/spotify.png" },
  { name: "GitHub", image: "/images/brands/github.png" },
];

function TrustedBrands() {
  const listRef = useRef(null);

  const scrollLogos = (direction) => {
    if (!listRef.current) return;

    listRef.current.scrollBy({
      left: direction * 160,
      behavior: "smooth",
    });
  };

  return (
    <section className="trusted-brands" aria-label="Trusted brands">
      <div className="trusted-brands__header">
        <p className="trusted-brands__eyebrow">
          Trusted by thousands of learners worldwide
        </p>

        <div className="trusted-brands__arrows">
          <button
            type="button"
            className="trusted-brands__arrow"
            aria-label="Scroll logos left"
            onClick={() => scrollLogos(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 12H5m7-7-7 7 7 7" />
            </svg>
          </button>

          <button
            type="button"
            className="trusted-brands__arrow"
            aria-label="Scroll logos right"
            onClick={() => scrollLogos(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="trusted-brands__list"
        ref={listRef}
        tabIndex={0}
        aria-label="Brand logos"
      >
        {brands.map((brand) => (
          <div className="trusted-brands__item" key={brand.name}>
            <img
              className="trusted-brands__logo"
              src={brand.image}
              alt={`${brand.name} logo`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustedBrands;