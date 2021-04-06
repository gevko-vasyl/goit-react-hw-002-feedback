import PropTypes from 'prop-types';
import './Statistics.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="Statistics">
    <h2 className="Statistics__title">Statistics</h2>
    <p className="Statistics__item">Good: {good}</p>
    <p className="Statistics__item">Neutral: {neutral}</p>
    <p className="Statistics__item">Bad: {bad}</p>
    <p className="Statistics__item">Total: {total}</p>
    <p className="Statistics__item">
      Positive Percentage: {positivePercentage}%
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
