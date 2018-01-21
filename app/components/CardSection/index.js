import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Card, CardMedia, CardTitle, CardHeader } from 'material-ui/Card';
import ReduxLogo from '../../common/images/redux-logo.svg';

const CardWrapper = styled(Card) `
    margin: ${props => props.data ? '10px 10px 10px 0' : '10px'};
`;

const CardSection = ({ isFirstCard, cardTitle, cardSubTitle, withCardHeader, cardHeaderSubTitle }) => {
    return (
        <CardWrapper data={isFirstCard} containerStyle={{ padding: 0, width: 235 }}>
            {withCardHeader && <CardHeader
                subtitle={cardHeaderSubTitle}
                subtitleStyle={{ fontSize: 16 }}
                style={{ padding: 12 }}
                textStyle={{ padding: 0 }}
            />}
            <CardMedia mediaStyle={{ backgroundColor: 'rgb(188, 188, 188)' }}>
                <img src={ReduxLogo} height={withCardHeader ? 202 : '100%'} />
            </CardMedia>
            <CardTitle title={cardTitle} subtitle={cardSubTitle} titleStyle={{ fontSize: 18, lineHeight: '24px' }} style={{ padding: 12 }} />
        </CardWrapper>
    );
};

CardSection.propTypes = {
    isFirstCard: PropTypes.bool.isRequired,
    cardTitle: PropTypes.node.isRequired,
    cardSubTitle: PropTypes.node.isRequired,
    cardHeaderSubTitle: PropTypes.node,
    withCardHeader: PropTypes.bool,
};

export default CardSection;