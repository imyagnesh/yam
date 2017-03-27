import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import ReduxLogo from '../../common/images/redux-logo.svg';

const CardWrapper = styled(Card) `
    min-width: 14.8em;
    margin: 10px;
`;

const CardTextWrapper = styled(CardText) `
    display: -webkit-box;
    line-height: 1.6;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: normal;
  height: ${14 * 1.6 * 5}px;
  overflow: hidden;
  margin: 0 12px;
`;

const BlogCardSection = ({cardTitle}) => {
    return (
        <CardWrapper containerStyle={{ padding: 0 }}>
            <CardMedia mediaStyle={{ backgroundColor: 'rgb(188, 188, 188)' }}>
                <img src={ReduxLogo} height="150" />
            </CardMedia>
            <CardTitle title={cardTitle} titleStyle={{ fontSize: 18, lineHeight: '24px' }} style={{ padding: 12 }} />
            <CardTextWrapper style={{ padding: 0 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardTextWrapper>
            <CardActions>
                <FlatButton label="Know More" secondary />
            </CardActions>
        </CardWrapper>
    );
};

BlogCardSection.propTypes = {
    cardTitle: PropTypes.node.isRequired,
};

export default BlogCardSection;