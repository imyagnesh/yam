import React, { Component } from "react";
import styled from "styled-components";
import messages from "./messages";
import { CoverImg } from "../../components";
import coverImage from "../../common/videos/cover.jpg";
import AboutIntroduction from "../../components/AboutIntroduction";
import personalPhoto from "../../common/images/photo-top.jpg";

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 20px auto;
`;
class AboutMe extends Component {
  render() {
    return (
      <div>
        <CoverImg
          posterImg={coverImage}
          headerText={messages.headerText}
          subHeaderText={messages.subHeaderText}
        />
        <ContentWrapper>
          <AboutIntroduction />

          <div>What I can do.</div>
          <div>
            <div>Deep into my life</div>
            <div style={{ display: "flex", flexFlow: "row wrap" }}>
              <div style={{ flex: 1, minWidth: 320 }}>
                <img
                  src={personalPhoto}
                  alt="Personal Pic"
                  style={{
                    display: "flex",
                    height: "auto",
                    width: "100%",
                    maxWidth: 300
                  }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 320 }}>content</div>
            </div>
          </div>
          <div>Instagram</div>
          <div>Twitter</div>
        </ContentWrapper>
      </div>
    );
  }
}

AboutMe.propTypes = {};

export default AboutMe;
