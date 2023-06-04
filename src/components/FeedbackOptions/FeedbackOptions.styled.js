import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FeedbackBtn = styled.button`
  min-width: 80px;
  text-transform: capitalize;
  border-radius: 15px;
  padding: 10px;
  background-color: ${({ typeName }) => {
    switch (typeName) {
      case 'good':
        return `#aaffaa`;
      case 'neutral':
        return `#fdf89f`;
      case 'bad':
        return `#f38989`;
      default:
        return;
    }
  }};
  cursor: pointer;
`;
