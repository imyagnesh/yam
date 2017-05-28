import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import AboutMeBack from '../AboutMeBack';
import AboutMeFront from '../AboutMeFront';
import ReduxLogo from '../../common/images/redux-logo.svg';

const ContentWrapper = styled.div`
    max-width: 1024px;
    margin: 0 0 50px;
    @media screen and (max-width: 640px) {
      display: none;
    }
`;

const PaperWrapper = styled.div`
    height: 420px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const InerDiv = styled(Paper)`
    width:  300px;
    flex-wrap: wrap;
    border-radius: 3px;
    height: 100%;
    display: flex;
    justify-content: center;
`;

const ImageDiv = styled(Paper) `
    height: 260px; 
    width: 260px; 
    border-radius: 3px;
    @media screen and (min-width: 640px) and (max-width: 1024px) {
      display: none;
    }
`;

const AboutMe = props => {
    return (
        <ContentWrapper>
            <PaperWrapper>
                <InerDiv>
                    <AboutMeFront />
                </InerDiv>
                <ImageDiv>
                    <img src={ReduxLogo} />
                </ImageDiv>
                <InerDiv>
                    <AboutMeBack />
                </InerDiv>
            </PaperWrapper>
        </ContentWrapper>
    );
};


AboutMe.propTypes = {

};


export default AboutMe;