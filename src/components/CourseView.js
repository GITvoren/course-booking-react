import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import UserContext from '../utilities/UserContext.js';
import '../assets/css/courseview.css';

function CourseView() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { courseId } = useParams();

  const [course, setCourse] = useState({
    name: '',
    description: '',
    schedule: '',
    price: 0,
    enrollees: 0,
  });
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [enrolling, setEnrolling] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCourse() {
      setLoading(true);
      setLoadError(false);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/courses/${courseId}/details`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error('Unable to load course details');
        }

        const data = await response.json();
        setCourse({
          name: data.name || 'Course details',
          description: data.description || '',
          schedule: data.schedule || 'Schedule to be announced',
          price: data.price ?? 0,
          enrollees: Array.isArray(data.enrollees) ? data.enrollees.length : 0,
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          setLoadError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadCourse();
    return () => controller.abort();
  }, [courseId]);

  const formatPrice = (price) => {
    const numericPrice = Number(price);
    return Number.isFinite(numericPrice)
      ? numericPrice.toLocaleString('en-PH', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : price;
  };

  const enroll = async () => {
    if (enrolling) return;
    setEnrolling(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/enroll`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ courseId }),
      });

      const data = await response.json();

      if (response.ok && data === true) {
        await Swal.fire({
          title: 'Successfully Enrolled',
          icon: 'success',
          text: 'You have successfully enrolled for this course.',
          confirmButtonText: 'Explore courses',
          confirmButtonColor: '#00B9F1',
        });
        navigate('/courses');
      } else {
        Swal.fire({
          title: 'Something went wrong',
          icon: 'error',
          text: 'Please try again.',
          confirmButtonColor: '#00B9F1',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Connection error',
        icon: 'error',
        text: 'We could not complete your enrollment. Please check your connection and try again.',
        confirmButtonColor: '#00B9F1',
      });
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <main className="course-view-page">
        <div className="course-view-shell">
          <button className="course-view-back" onClick={() => navigate(-1)} type="button">
            <span aria-hidden="true">←</span> Back to courses
          </button>
          <section className="course-view-state" aria-live="polite">
            <span className="course-view-loader" />
            <h2>Loading course details…</h2>
            <p>Getting the schedule and enrollment information ready.</p>
          </section>
        </div>
      </main>
    );
  }

  if (loadError) {
    return (
      <main className="course-view-page">
        <div className="course-view-shell">
          <button className="course-view-back" onClick={() => navigate(-1)} type="button">
            <span aria-hidden="true">←</span> Back to courses
          </button>
          <section className="course-view-state">
            <span className="course-view-state-icon" aria-hidden="true">!</span>
            <h2>We couldn’t load this course</h2>
            <p>Please try again in a moment, or return to the course catalog.</p>
            <Button className="course-view-primary" onClick={() => window.location.reload()}>
              Try again
            </Button>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="course-view-page">
      <div className="course-view-shell">
        <button
          className="course-view-back"
          onClick={() => navigate(-1)}
          type="button"
        >
          <span aria-hidden="true">←</span> Back to courses
        </button>

        <section className="course-view-hero">
          <div className="course-view-hero-copy">
            <span className="course-view-eyebrow">
              <span className="course-view-eyebrow-dot" />
              COURSE DETAILS
            </span>
            <h1>{course.name}</h1>
            <p>Everything you need to know before you take the next step in your learning journey.</p>
          </div>
          <div className="course-view-hero-mark" aria-hidden="true">
            <span>&lt;/&gt;</span>
            <i />
          </div>
        </section>

        <div className="course-view-layout">
          <section className="course-view-main-card">
            <div className="course-view-section-heading">
              
              <div>
                <span className="course-view-overline">OVERVIEW</span>
                <h2>About this course</h2>
              </div>
            </div>
            <p className="course-view-description">
              {course.description || 'Course description will be available soon.'}
            </p>

            <div className="course-view-divider" />

            <div className="course-view-section-heading">
              <span className="course-view-heading-icon" aria-hidden="true">◷</span>
              <div>
                <span className="course-view-overline">PLAN AHEAD</span>
                <h2>Class schedule</h2>
              </div>
            </div>
            <div className="course-view-schedule">
              <div className="course-view-schedule-icon" aria-hidden="true">▦</div>
              <div>
                <span className="course-view-detail-label">SCHEDULE</span>
                <p>{course.schedule || 'Schedule to be announced'}</p>
              </div>
            </div>
          </section>

          <aside className="course-view-sidebar">
            <section className="course-view-enroll-card">
              <span className="course-view-overline">INVEST IN YOURSELF</span>
              <h2>Ready to get started?</h2>
              <p>Take the next step and build skills you can put to work.</p>

              <div className="course-view-price-block">
                <span className="course-view-detail-label">COURSE PRICE</span>
                <div className="course-view-price">
                  <span className="course-view-currency">₱</span>
                  {formatPrice(course.price)}
                </div>
              </div>

              {user && user.id !== null ? (
                <>
                  <div className="course-view-enrollees">
                    <div className="course-view-people-icon" aria-hidden="true">♧</div>
                    <div>
                      <strong>{course.enrollees}</strong>
                      <span>Current enrollees</span>
                    </div>
                  </div>
                  <Button
                    onClick={enroll}
                    disabled={enrolling}
                    className="course-view-primary course-view-enroll-button"
                  >
                    {enrolling ? 'Processing…' : 'Enroll in this course'}
                    {!enrolling && <span aria-hidden="true">→</span>}
                  </Button>
                </>
              ) : (
                <Link
                  className="course-view-primary course-view-enroll-button"
                  to="/account/login"
                >
                  Login to enroll <span aria-hidden="true">→</span>
                </Link>
              )}

              <p className="course-view-secure-note">
                <span aria-hidden="true">✓</span> Start your learning journey today
              </p>
            </section>

            <div className="course-view-help-card">
              <span aria-hidden="true" className="course-view-help-icon">?</span>
              <div>
                <strong>Have questions?</strong>
                <p>Review the schedule and course details before enrolling.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default CourseView;
