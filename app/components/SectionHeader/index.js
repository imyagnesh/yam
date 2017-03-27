import React, {PropTypes} from 'react';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';

const SectionHeaderWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  align-content: center;
  max-width: 100%;
  justify-content: center;
  margin: 1em;
`;

const SubHeaderWrapper = styled.p`
  font-weight: 400;
  letter-spacing: .01em;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

const TitleWrapper = styled.h1`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .005em;
  text-transform: uppercase
  margin: 0;
`;

const CenterAlign = styled.div`
  align-self: center;
  width: 60px;
  margin: 0.5em;
`;

const SectionHeader = (({ caption, title }) =>
  <SectionHeaderWrapper>
    <SubHeaderWrapper>{caption}</SubHeaderWrapper>
    <TitleWrapper>{title}</TitleWrapper>
    <CenterAlign><Divider /></CenterAlign>
  </SectionHeaderWrapper>
);

SectionHeader.propTypes = {
  caption: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,  
};

export default SectionHeader;