import PropTypes from 'prop-types';
import './Notification.scss';

const Notification = ({ message }) => (
  <h2 className="Notification">{message}</h2>
);

Notification.propTypes = { message: PropTypes.string.isRequired };

export default Notification;
