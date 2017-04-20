import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Ratting from './../Ratting';
import CardSection from './../CardSection';
import SectionHeader from '../SectionHeader';
import RedirectButton from '../RedirectButton';
import HScroll from '../../containers/HScroll';

const data = [
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
    { title: 'Redux', SubTitle: <Ratting rating={3.5} /> },
];

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
                {data.map((value, i) => <CardSection key={i} isFirstCard={i === 0} cardTitle={value.title} cardSubTitle={value.SubTitle} />)}
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