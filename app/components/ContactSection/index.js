import React, { PropTypes } from 'react';
import styled from 'styled-components';
import RedirectButton from '../RedirectButton/index';

const ContactSectionWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #000;
  color: rgba(255, 255, 255, 1);
`;

const DisplayText = styled.h1`
  font-size: 3.5vh;
  font-weight: 400;
  line-height: 40px;
`;


const ContactSection = (({ content, buttonLabel, path }) =>
  <ContactSectionWrapper>
    <DisplayText>{content}</DisplayText>
    <RedirectButton
      label={buttonLabel}
      path={path}
    />
  </ContactSectionWrapper>
);

ContactSection.propTypes = {
  content: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ContactSection;
