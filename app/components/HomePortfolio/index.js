import React, { PropTypes } from 'react';
import styled from 'styled-components';
import BlogCardSection from './../BlogCardSection';
import SectionHeader from '../SectionHeader';
import RedirectButton from '../RedirectButton';
import HScroll from '../../containers/HScroll';

const data = [
    { title: 'Redux' },
    { title: 'Redux' },
    { title: 'Redux' },
    { title: 'Redux' },
];

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 20px auto;
`;


const HomePortfolio = props => {
    return (
        <ContentWrapper>
            <SectionHeader
                caption="Know Something About"
                title="My Projects"
            />
            <HScroll scrollWidth={260}>
                {data.map((value, i) => <BlogCardSection key={i} isFirstCard={i === 0} cardTitle={value.title} />)}
            </HScroll>
            <RedirectButton
                label="Read More"
                path="/blog"
            />
        </ContentWrapper>
    );
};

HomePortfolio.propTypes = {

};

export default HomePortfolio;