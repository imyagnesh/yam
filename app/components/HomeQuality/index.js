import React, { PropTypes } from 'react';
import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionWatchLater from 'material-ui/svg-icons/action/watch-later';
import ImageStyle from 'material-ui/svg-icons/image/style';
import EditorBubbleChart from 'material-ui/svg-icons/editor/bubble-chart';
import {
    redA200,
} from 'material-ui/styles/colors';

import HScroll from '../../containers/HScroll';

const ContentWrapper = styled.div`
flex-direction: column;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  align-content: center;
  max-width: 320px;
  justify-content: center;
`;

const TitleWrapper = styled.h1`
font-size: 20px;
  font-weight: 500;
  letter-spacing: .005em;
`;

const CaptionWrapper = styled.p`
padding: 0 1em;
line-height: 1.5em;
    height: 1.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  font-size: 12px;
  letter-spacing: .02em;
`;

const HomeQuality = props => {
    return (
        <HScroll scrollWidth={320} inline>
            <ContentWrapper>
                <IconButton>
                    <ActionFavorite color={redA200} />
                </IconButton>
                <TitleWrapper>Passionate</TitleWrapper>
                <CaptionWrapper>It is the best think to be in sync with the latest technology</CaptionWrapper>
            </ContentWrapper>
            <ContentWrapper>
                <IconButton>
                    <ActionWatchLater color={redA200} />
                </IconButton>
                <TitleWrapper>Up-to-date</TitleWrapper>
                <CaptionWrapper>It is the best think to be in sync with the latest technology</CaptionWrapper>
            </ContentWrapper>
            <ContentWrapper>
                <IconButton>
                    <ImageStyle color={redA200} />
                </IconButton>
                <TitleWrapper>Creative</TitleWrapper>
                <CaptionWrapper>It is the best think to be in sync with the latest technology</CaptionWrapper>
            </ContentWrapper>
            <ContentWrapper>
                <IconButton>
                    <EditorBubbleChart color={redA200} />
                </IconButton>
                <TitleWrapper>Strategist</TitleWrapper>
                <CaptionWrapper>It is the best think to be in sync with the latest technology</CaptionWrapper>
            </ContentWrapper>
        </HScroll>
    );
};

HomeQuality.propTypes = {

};

export default HomeQuality;