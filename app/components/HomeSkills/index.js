import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Ratting from './../Ratting';
import CardSection from './../CardSection';
import SectionHeader from '../SectionHeader';
import RedirectButton from '../RedirectButton';
import HScroll from '../../containers/HScroll';

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 20px auto;
`;

const HomeSkills = props => {
    return (
        <ContentWrapper>
            <SectionHeader
                caption="Know Something About"
                title="My Skills"
                />
            <HScroll scrollWidth={260}>
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
                <CardSection cardTitle="Redux" cardSubTitle={<Ratting rating={3.5} />} />
            </HScroll>
            <RedirectButton
                label="Read More"
                path="/blog"
                />
        </ContentWrapper>
    );
};

HomeSkills.propTypes = {

};

export default HomeSkills;