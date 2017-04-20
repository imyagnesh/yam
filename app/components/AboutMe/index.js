import React, { PropTypes } from 'react';
import styled from 'styled-components';
// import Paper from 'material-ui/Paper';
// import Avatar from 'material-ui/Avatar';

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 0 0 50px;
    @media screen and (max-width: 640px) {
      display: none;
    }
`;

// const AvatarWrapper = styled(Avatar) `
//     position: absolute;
//     left: calc(50% - 50px);
//     top: -50px;
// `;



const PaperWrapper = styled.div`
    height: 380px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const InerDiv = styled.div`
    min-width:  260px;
    flex-wrap: wrap;
`;

const FrontDiv = styled(InerDiv) `
border: 1px solid black;
height: 100%
`;

const BackDiv = styled(InerDiv) `
border: 1px solid black;
height: 100%
`;

const ImageDiv = styled.div `
    height: 260px; 
    width: 260px; 
    border: 1px solid black;
    @media screen and (min-width: 640px) and (max-width: 1024px) {
      display: none;
    }
`;

const AboutMe = props => {
    return (
        <ContentWrapper>
            <PaperWrapper>
                <FrontDiv>Fromt</FrontDiv>
                <ImageDiv>
                    Image
                </ImageDiv>
                <BackDiv>Back</BackDiv>
            </PaperWrapper>
        </ContentWrapper>
    );
};


AboutMe.propTypes = {

};


export default AboutMe;