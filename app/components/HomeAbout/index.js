import React, { PropTypes } from 'react';
import styled from 'styled-components';
import SectionHeader from '../SectionHeader';
import AboutMe from '../AboutMe';
import RedirectButton from '../RedirectButton';
import FlipCard from '../../containers/FlipCard';

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 20px auto;
`;

const FlipCardWrapper = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 640px) {
      display: none;
    }
`;

const HomeAbout = props => {
    return (
        <ContentWrapper>
            <SectionHeader
                caption="Know Something"
                title="Who am I"
                />
            <FlipCardWrapper>
                <FlipCard />
            </FlipCardWrapper>
            <AboutMe />
            <RedirectButton
                label="Read More"
                path="/blog"
                />
        </ContentWrapper>
    );
};

HomeAbout.propTypes = {

};

export default HomeAbout;