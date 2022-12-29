import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptionsContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackOptionsContainer>
          {options.map((option) => (
          <Button type='button' key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
        ))}
            </FeedbackOptionsContainer>     
    )
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
};


