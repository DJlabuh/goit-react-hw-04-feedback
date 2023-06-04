import PropTypes from 'prop-types';
import { SectionComponents, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionComponents>
      <Title>{title}</Title>
      {children}
    </SectionComponents>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};