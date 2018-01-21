import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import ContactIcon from 'material-ui/svg-icons/content/send';
import coverImage from '../../common/videos/cover.jpg';

const VideoWrapper = styled.div`
  width: 100%;
  min-height:60vh;
  max-height:60vh;
  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${coverImage}) no-repeat center center;
  background-size: cover;
  overflow: hidden;

  &:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 60vh;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
`;

const HeaderWraper = styled.div`
    margin: 0;
  position: absolute;
  z-index: 2;
  top: 25%;
  transform: translateY(-25%);
  width: calc(100%);
  text-align: center;
`;

const HeaderTitle = styled.h1`
    font: 400 5.1vh "brandon-grotesque", sans-serif;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.075em;
  margin: 0.375em 0;
`;

const HeaderSubTitle = styled.h2`
    color: #FFF;
  font: italic 300 2.6vh "Open Sans", "open-sans", sans-serif;
  letter-spacing: 0.005em;
`;

const CoverVideo = styled.video`
    object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: -100;
  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${coverImage}) no-repeat center center;
  background-size: cover;
  right: 0;
  bottom: 0;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    display: none;
    }
`;



const posterVideo = ({ PosterImg, PosterVideoWebm, PosterVideoMp4, headerText, subHeaderText, headerButtonText }) => {
    const changePath = () => {
        browserHistory.push('/contact');
    };
    return (
        <VideoWrapper>
            <HeaderWraper>
                <HeaderTitle><FormattedMessage {...headerText} /></HeaderTitle>
                <HeaderSubTitle><FormattedMessage {...subHeaderText} /></HeaderSubTitle>
                <RaisedButton
                    style={{ height: '50px', minWidth: '150px' }}
                    labelStyle={{ lineHeight: '50px' }}
                    onTouchTap={changePath}
                    label={<FormattedMessage {...headerButtonText} />}
                    secondary
                    icon={<ContactIcon />}
                    />
            </HeaderWraper>
            <CoverVideo autoPlay muted loop poster={PosterImg} id="bgvid">
                <source src={PosterVideoWebm} type="video/webm" />
                <source src={PosterVideoMp4} type="video/mp4" />
            </CoverVideo>
        </VideoWrapper>
    );
};

posterVideo.propTypes = {
    PosterImg: PropTypes.string.isRequired,
    PosterVideoWebm: PropTypes.string.isRequired,
    PosterVideoMp4: PropTypes.string.isRequired,
    headerText: PropTypes.object.isRequired,
    subHeaderText: PropTypes.object.isRequired,
    headerButtonText: PropTypes.object.isRequired,
};

export default posterVideo;
