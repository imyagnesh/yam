import React, { PropTypes } from "react";
import styled from "styled-components";
import CardSection from "./../CardSection";
import SectionHeader from "../SectionHeader";
import RedirectButton from "../RedirectButton";
import HScroll from "../../containers/HScroll";

const data = [
  {
    title: "Sr. Software Engineer",
    SubTitle: "HPE Ltd.",
    HeaderSubTitle: "April 2016 - Pressent"
  },
  {
    title: "Sr. Software Engineer",
    SubTitle: "HPE Ltd.",
    HeaderSubTitle: "April 2016 - Pressent"
  },
  {
    title: "Sr. Software Engineer",
    SubTitle: "HPE Ltd.",
    HeaderSubTitle: "April 2016 - Pressent"
  },
  {
    title: "Sr. Software Engineer",
    SubTitle: "HPE Ltd.",
    HeaderSubTitle: "April 2016 - Pressent"
  }
];

const ContentWrapper = styled.div`
  max-width: 1024px;
  margin: 20px auto;
`;

const HomeExperience = props => {
  return (
    <ContentWrapper>
      <SectionHeader caption="Know Something About" title="My Experience" />
      <HScroll scrollWidth={260}>
        {data.map((value, i) => (
          <CardSection
            key={i}
            isFirstCard={i === 0}
            cardTitle={value.title}
            cardSubTitle={value.SubTitle}
            cardHeaderSubTitle={value.HeaderSubTitle}
            withCardHeader
          />
        ))}
      </HScroll>
      <RedirectButton label="Read More" path="/blog" />
    </ContentWrapper>
  );
};

HomeExperience.propTypes = {};

export default HomeExperience;
