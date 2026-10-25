import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import '../assets/css/coursecard.css';

function CourseCard({ coursedata }) {
  const { name, description, price, _id } = coursedata;

  const formattedPrice =
    typeof price === 'number'
      ? price.toLocaleString('en-PH', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : price;

  return (
    <article className="codelab-course-card">
      <div className="codelab-course-card-topline">
        <span className="codelab-course-card-label">
          <span className="codelab-course-card-status-dot" aria-hidden="true" />
          COURSE
        </span>
        <span className="codelab-course-card-mark" aria-hidden="true">
          {'</>'}
        </span>
      </div>

      <div className="codelab-course-card-content">
        <h3 className="codelab-course-card-title">{name}</h3>
        <p className="codelab-course-card-description">{description}</p>
      </div>

      <div className="codelab-course-card-footer">
        <div className="codelab-course-card-price-block">
          <span className="codelab-course-card-price-label">COURSE PRICE</span>
          <p className="codelab-course-card-price">
            <span className="codelab-course-card-currency">₱</span>
            {formattedPrice}
          </p>
        </div>

        <Link
          className="codelab-course-card-link"
          to={`/${_id}/details`}
          aria-label={`View schedule for ${name}`}
        >
          <Button
            type="button"
            variant="outline-light"
            className="codelab-course-card-button"
          >
            View Schedule
            <span className="codelab-course-card-arrow" aria-hidden="true">→</span>
          </Button>
        </Link>
      </div>
    </article>
  );
}

CourseCard.propTypes = {
  coursedata: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};

export default CourseCard;
