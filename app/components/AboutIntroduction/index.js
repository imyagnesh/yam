import React from "react";
import PropTypes from "prop-types";
import SectionHeader from "../SectionHeader";
import styled from "styled-components";

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 20px auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
`;

const AboutIntroduction = () => {
  return (
    <ContentWrapper>
      <SectionHeader title="A Few fun facts about myself" />
      <Wrapper>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </Description>
      </Wrapper>
    </ContentWrapper>
  );
};

AboutIntroduction.propTypes = {};

export default AboutIntroduction;
