import PropTypes from 'prop-types';
import './FeedbackOptions.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className="FeedbackOptions">
    {options.map(el => (
      <li className="FeedbackOptions__item" key={el}>
        <button
          className="FeedbackOptions__button"
          name={el}
          onClick={onLeaveFeedback}
        >
          {el}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
