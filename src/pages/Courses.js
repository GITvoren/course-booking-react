import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import CourseCard from '../components/CourseCard.js';
import '../assets/css/courses.css';
import undraw2 from '../assets/images/undraw2.png';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCourses() {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/courses/active`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('We could not load the courses right now.');
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error('The course list returned an unexpected response.');
        }

        setCourses(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong while loading courses.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchCourses();

    return () => controller.abort();
  }, []);

  return (
    <main className="courses-page">
      <Container className="courses-container">
        <section className="courses-hero" aria-labelledby="courses-page-title">
          <div className="courses-hero-content">
            <span className="courses-eyebrow">
              <span className="courses-eyebrow-dot" aria-hidden="true" />
              YOUR NEXT CHAPTER STARTS HERE
            </span>

            <h1 id="courses-page-title">
              Build skills.
              <br />
              <span>Build your future.</span>
            </h1>

            <p className="courses-hero-description">
              Learn by doing with practical courses designed to help you grow
              your coding skills and turn ideas into real projects.
            </p>

            <a className="courses-hero-link" href="#available-courses">
              Explore courses <span aria-hidden="true">↓</span>
            </a>

            <div className="courses-hero-note">
              <span className="courses-hero-note-line" aria-hidden="true" />
              Learn at your pace. Create something real.
            </div>
          </div>

          <div className="courses-hero-art" aria-hidden="true">
            <div className="courses-art-orbit courses-art-orbit-one" />
            <div className="courses-art-orbit courses-art-orbit-two" />
            <div className="courses-art-code courses-art-code-top">
              <span>01</span> &lt;learn /&gt;
            </div>
            <img
              src={undraw2}
              className="courses-hero-image"
              alt=""
            />
            <div className="courses-art-code courses-art-code-bottom">
              <span className="courses-code-dot" /> build_your_future()
            </div>
          </div>
        </section>

        <section
          className="courses-catalog"
          id="available-courses"
          aria-labelledby="courses-catalog-title"
        >
          <div className="courses-section-heading">
            <div>
              <span className="courses-section-kicker">THE LEARNING PATH</span>
              <h2 id="courses-catalog-title">Explore our courses</h2>
              <p>Find your next skill and start building with confidence.</p>
            </div>

            {!isLoading && !error && (
              <div className="courses-count" aria-live="polite">
                <span className="courses-count-number">{courses.length}</span>
                <span>{courses.length === 1 ? 'course available' : 'courses available'}</span>
              </div>
            )}
          </div>

          {isLoading && (
            <div className="courses-status" role="status" aria-live="polite">
              <Spinner animation="border" role="presentation" />
              <span>Finding your next course...</span>
            </div>
          )}

          {!isLoading && error && (
            <div className="courses-message courses-error" role="alert">
              <span className="courses-message-icon" aria-hidden="true">!</span>
              <div>
                <h3>Courses are temporarily unavailable</h3>
                <p>{error}</p>
                <button
                  className="courses-retry-button"
                  type="button"
                  onClick={() => window.location.reload()}
                >
                  Try again
                </button>
              </div>
            </div>
          )}

          {!isLoading && !error && courses.length === 0 && (
            <div className="courses-message courses-empty" role="status">
              <span className="courses-empty-symbol" aria-hidden="true">&lt;/&gt;</span>
              <h3>New courses are on the way</h3>
              <p>There are no active courses to show right now. Please check back soon.</p>
            </div>
          )}

          {!isLoading && !error && courses.length > 0 && (
            <div className="courses-grid">
              {courses.map((course) => (
                <div className="courses-grid-item" key={course._id}>
                  <CourseCard coursedata={course} />
                </div>
              ))}
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}

export default Courses;
