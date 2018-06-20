import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 20px auto;
`;

const CardWrapper = styled(Paper)`
  margin: 58px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarStyle = styled(Avatar)`
  top: -50px;
  position: relative;
`;
const Description = styled.p`
  text-align: center;
  max-width: 700px;
`;

const NameStyle = styled.span`
  font-size: 32px;
  color: rgb(255, 82, 82);
  display: block;
  line-height: 36px;
  margin: 10px;
`;

const DesignationStyle = styled.span`
  color: rgba(0, 0, 0, 0.6);
  display: block;
  font-size: 16px;
`;

const ResumeHead = props => {
  return (
    <ContentWrapper>
      <CardWrapper zDepth={1}>
        <AvatarStyle size={100}>A</AvatarStyle>
        <NameStyle>Yagnesh Modh</NameStyle>
        <DesignationStyle>Full Stack Developer</DesignationStyle>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </Description>
      </CardWrapper>
    </ContentWrapper>
  );
};

ResumeHead.propTypes = {};

export default ResumeHead;
