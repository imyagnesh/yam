import React from "react";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";

const iconStyles = {
  fontSize: 36
};

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 20px auto;
`;

const PaperWrapper = styled(Paper)`
  margin: 8px;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const HobbyWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  min-width: 250px;
`;

const ResumeHobby = props => {
  return (
    <ContentWrapper>
      <PaperWrapper>
        <SkillsWrapper>
          <HobbyWrapper>
            <FontIcon className="material-icons" style={iconStyles}>
              devices
            </FontIcon>
            <div>Coding</div>
          </HobbyWrapper>
          <HobbyWrapper>
            <FontIcon className="material-icons" style={iconStyles}>
              flight_takeoff
            </FontIcon>
            <div>Traveling</div>
          </HobbyWrapper>
          <HobbyWrapper>
            <FontIcon className="material-icons" style={iconStyles}>
              photo_camera
            </FontIcon>
            <div>Photography</div>
          </HobbyWrapper>
          <HobbyWrapper>
            <FontIcon className="material-icons" style={iconStyles}>
              local_florist
            </FontIcon>
            <div>Planting</div>
          </HobbyWrapper>
        </SkillsWrapper>
      </PaperWrapper>
    </ContentWrapper>
  );
};

ResumeHobby.propTypes = {};

export default ResumeHobby;
