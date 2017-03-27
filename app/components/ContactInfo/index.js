import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import SocialPublic from 'material-ui/svg-icons/social/public';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';

const ContactInfoWraper = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
    max-width: 1280px;
    margin: 0 auto;
    flex-wrap: wrap;
    & > * {
        flex: 1 1 0%;
        margin: 10px;
    }
`;

const ContactInfoDiv = styled.div`
    flex-direction: row;
    display: flex;
    min-width: 290px;
    align-items: center;
    align-content: center;
    max-width: 100%;
    justify-content: flex-start;
`;

const SubHeader = styled.h1`
    font-weight: 400;
  letter-spacing: .01em;
  font-size: 16px;
  line-height: 24px;
`;

const ContactInfo = ({ messages }) => {
    return (
        <ContactInfoWraper>
            <ContactInfoDiv>
                <FloatingActionButton secondary>
                    <MapsPlace />
                </FloatingActionButton>
                <div style={{ margin: '1rem' }}>
                    <SubHeader>B-113 SK Aster Apartment, Electronic City Phase 1, Bangalore - 560100, India</SubHeader>
                </div>
            </ContactInfoDiv>
            <ContactInfoDiv>
                <FloatingActionButton secondary>
                    <CommunicationCall />
                </FloatingActionButton>
                <div style={{ margin: '1rem' }}>
                    <SubHeader>+91-8690090417</SubHeader>
                </div>
            </ContactInfoDiv>
            <ContactInfoDiv>
                <FloatingActionButton secondary>
                    <CommunicationEmail />
                </FloatingActionButton>
                <div style={{ margin: '1rem' }}>
                    <SubHeader>hello@yagneshmodh.in</SubHeader>
                </div>
            </ContactInfoDiv>
            <ContactInfoDiv>
                <FloatingActionButton secondary>
                    <SocialPublic />
                </FloatingActionButton>
                <div style={{ margin: '1rem' }}>
                    <SubHeader>www.yagneshmodh.in</SubHeader>
                </div>
            </ContactInfoDiv>
        </ContactInfoWraper>
    );
};

ContactInfo.propTypes = {
    messages: PropTypes.object.isRequired,
};

export default ContactInfo;
