import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackList.module.css';

const FeedbackList = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(el => (
        <button
          className={css.button_style}
          type="button"
          onClick={onLeaveFeedback}
          name={el}
          key={el}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default FeedbackList;

FeedbackList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
