import React, { PropTypes } from "react";
import styled from "styled-components";
import messages from "./messages";
import { CoverImg } from "../../components";
import coverImage from "../../common/videos/cover.jpg";
import HScroll from "../../containers/HScroll";
import scrollImage from "../../common/images/photo-top.jpg";

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 20px auto;
`;

const TitleWrapper = styled.h1`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: rgb(255, 82, 82);
  margin: 0;
`;

const CaptionWrapper = styled.p`
  font-weight: 400;
  letter-spacing: 0.01em;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
`;

const PDWrapper = styled.div`
  display: flex;
  font-weight: 400;
  letter-spacing: 0.01em;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
  color: rgba(0, 0, 0, 0.54);
  padding: 5px 0;
`;

const LabelSpan = styled.span`
  flex: 0 1 30%;
`;

const ContainSpan = styled.span`
  flex: 0 1 70%;
`;

const TitleSpan = styled.span`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.87);
  display: block;
  line-height: 24px;
  padding: 5px 0;
`;

const BorderStyle = styled.hr`
  margin: -1px 0px 0px;
  height: 1px;
  border: none;
  background-color: rgb(224, 224, 224);
`;

const Portfolio = props => {
  return (
    <div>
      <CoverImg
        posterImg={coverImage}
        headerText={messages.headerText}
        subHeaderText={messages.subHeaderText}
      />
      <ContentWrapper>
        <div>
          <TitleWrapper style={{ margin: 10 }}>PROJECT NAME</TitleWrapper>
          <div style={{ display: "flex", flexFlow: "row wrap" }}>
            <div style={{ flex: 1, minWidth: 320 }}>
              <HScroll scrollWidth={300}>
                <img src={scrollImage} style={{ width: "100%", height: 320 }} />
                <img src={scrollImage} style={{ width: "100%", height: 320 }} />
                <img src={scrollImage} style={{ width: "100%", height: 320 }} />
              </HScroll>
            </div>
            <div
              style={{
                flex: 1,
                minWidth: 320,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <TitleSpan>Project Details</TitleSpan>
              <div>
                <PDWrapper>
                  <LabelSpan>Client:</LabelSpan>
                  <ContainSpan>Nokia Solution</ContainSpan>
                </PDWrapper>
                <BorderStyle />
                <PDWrapper>
                  <LabelSpan>Technologies:</LabelSpan>
                  <ContainSpan>
                    React, Redux, Angular Js, Node Js, Bootstrap
                  </ContainSpan>
                </PDWrapper>
                <BorderStyle />
                <PDWrapper>
                  <LabelSpan>Link:</LabelSpan>
                  <ContainSpan>www.google.com</ContainSpan>
                </PDWrapper>
                <BorderStyle />
                <PDWrapper>
                  <LabelSpan>My Role:</LabelSpan>
                  <ContainSpan>Full Stack Developer</ContainSpan>
                </PDWrapper>
              </div>
              <div style={{ marginBottom: 10, marginTop: 10 }}>
                <TitleSpan>About Project</TitleSpan>
                <CaptionWrapper>description</CaptionWrapper>
              </div>
            </div>
          </div>
        </div>
        <BorderStyle />
        <div>
          <TitleWrapper style={{ margin: 10 }}>PROJECT NAME</TitleWrapper>
          <div style={{ display: "flex", flexFlow: "row wrap" }}>
            <div style={{ flex: 1, minWidth: 320 }}>
              <HScroll scrollWidth={300}>
                <img src={scrollImage} style={{ width: "100%", height: 320 }} />
                <img src={scrollImage} style={{ width: "100%", height: 320 }} />
                <img src={scrollImage} style={{ width: "100%", height: 320 }} />
              </HScroll>
            </div>
            <div
              style={{
                flex: 1,
                minWidth: 320,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <TitleSpan>Project Details</TitleSpan>
              <div>
                <PDWrapper>
                  <LabelSpan>Client:</LabelSpan>
                  <ContainSpan>Nokia Solution</ContainSpan>
                </PDWrapper>
                <BorderStyle />
                <PDWrapper>
                  <LabelSpan>Technologies:</LabelSpan>
                  <ContainSpan>
                    React, Redux, Angular Js, Node Js, Bootstrap
                  </ContainSpan>
                </PDWrapper>
                <BorderStyle />
                <PDWrapper>
                  <LabelSpan>Link:</LabelSpan>
                  <ContainSpan>www.google.com</ContainSpan>
                </PDWrapper>
                <BorderStyle />
                <PDWrapper>
                  <LabelSpan>My Role:</LabelSpan>
                  <ContainSpan>Full Stack Developer</ContainSpan>
                </PDWrapper>
              </div>
              <div style={{ marginBottom: 10, marginTop: 10 }}>
                <TitleSpan>About Project</TitleSpan>
                <CaptionWrapper>description</CaptionWrapper>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

Portfolio.propTypes = {};

export default Portfolio;
