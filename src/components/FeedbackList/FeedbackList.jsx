import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackList.module.css'


 const FeedbackList = ({ options, onLeaveFeedback}) => {
    
     return Object.keys(options).map(el => {
    return (
        <button
        className={css.button_style}
        type="button"
        onClick={() => {
        onLeaveFeedback(el);
        }}
        key={el}
      >
        {el}
      </button>
    );
  });

}

export default FeedbackList;

FeedbackList.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};