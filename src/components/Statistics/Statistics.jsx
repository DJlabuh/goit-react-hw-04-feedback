import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsCount,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good: <StatisticsCount>{good}</StatisticsCount>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <StatisticsCount>{neutral}</StatisticsCount>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <StatisticsCount>{bad}</StatisticsCount>
      </StatisticsItem>
      <StatisticsItem>
        Total: <StatisticsCount>{total()}</StatisticsCount>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback:{' '}
        <StatisticsCount>{positivePercentage()}%</StatisticsCount>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
