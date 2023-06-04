import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 5px;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
`;

export const StatisticsCount = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
