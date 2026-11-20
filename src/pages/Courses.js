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
