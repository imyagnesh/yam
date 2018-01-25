import React, { PropTypes } from "react";
import styled from "styled-components";
import messages from "./messages";
import { CoverImg } from "../../components";
import coverImage from "../../common/videos/cover.jpg";
import ResumeExperience from "../../components/ResumeExperience";
import ResumeHead from "../../components/ResumeHead";
import ResumeSkills from "../../components/ResumeSkills";
import ResumeHobby from "../../components/ResumeHobby";
import ResumeLanguages from "../../components/ResumeLanguages";

import { SectionHeader } from "../../components";

const Resume = props => {
  return (
    <div>
      <CoverImg
        posterImg={coverImage}
        headerText={messages.headerText}
        subHeaderText={messages.subHeaderText}
        headerButtonText={messages.headerButtonText}
      />
      <ResumeHead />
      <SectionHeader caption="Know Something About" title="My Education" />
      <ResumeExperience />
      <SectionHeader caption="Know Something About" title="My Education" />
      <ResumeExperience />
      <SectionHeader caption="Know Something About" title="My Education" />
      <ResumeSkills />
      <SectionHeader caption="Know Something About" title="My Education" />
      <ResumeLanguages />
      <SectionHeader caption="Know Something About" title="My Education" />
      <ResumeHobby />
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
