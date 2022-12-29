import React from "react";
import PropTypes from "prop-types";
import { StatisticContainer, StatisticItem} from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticContainer>
      <StatisticItem>Good: <span>{good}</span></StatisticItem>
      <StatisticItem>Neutral: <span>{neutral}</span></StatisticItem>
      <StatisticItem>Bad: <span>{bad}</span></StatisticItem>
      <StatisticItem>Total: <span>{total}</span></StatisticItem>
      <StatisticItem>Positive feedback: <span>{positivePercentage + "%"}</span></StatisticItem>
    </StatisticContainer>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};


