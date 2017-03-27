import React, { PropTypes } from 'react';
import styled from 'styled-components';
import CardSection from './../CardSection';
import SectionHeader from '../SectionHeader';
import RedirectButton from '../RedirectButton';
import HScroll from '../../containers/HScroll';

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 20px auto;
`;

const HomeEducation = props => {
    return (
        <ContentWrapper>
            <SectionHeader
                caption="Know Something About"
                title="My Education"
                />
            <HScroll scrollWidth={260}>
                <CardSection cardTitle="Sr. Software Engineer" cardSubTitle="HPE Ltd." cardHeaderSubTitle="April 2016 - Pressent" withCardHeader/>
                <CardSection cardTitle="Sr. Software Engineer" cardSubTitle="TCS" cardHeaderSubTitle="April 2016 - Pressent" withCardHeader/>
                <CardSection cardTitle="Sr. Software Engineer" cardSubTitle="Gateway Technolabs" cardHeaderSubTitle="April 2016 - Pressent" withCardHeader/>
            </HScroll>
            <RedirectButton
                label="Read More"
                path="/blog"
                />
        </ContentWrapper>
    );
};

HomeEducation.propTypes = {

};

export default HomeEducation;