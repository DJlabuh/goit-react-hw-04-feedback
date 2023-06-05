import PropTypes from 'prop-types';
import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onUpdateStatus }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <li key={option}>
          <FeedbackBtn
            type="button"
            typeName={option}
            onClick={() => onUpdateStatus(option)}
          >
            {option}
          </FeedbackBtn>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpdateStatus: PropTypes.func.isRequired,
};
