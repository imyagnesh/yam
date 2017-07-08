import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import CircleHalf from 'react-icons/lib/fa/adjust';
import CircleBorder from 'react-icons/lib/fa/circle-o';
import Circle from 'react-icons/lib/fa/circle';

import {
    redA200,
} from 'material-ui/styles/colors';

const Rotate90 = styled(CircleHalf)`
  -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);  
`;

const Ratting = ({rating, circle}) => {
    return (
        <div>
            {[...Array(5)].map((x, i) => {
                const val = rating - i;
                if (val <= 0 ) {
                    return circle ? <CircleBorder color={redA200} size="24" key={i} /> : <StarBorder color={redA200} key={i} />
                } else if (val > 0 && val <= 0.5) {
                    return circle ? <Rotate90 color={redA200} size="24" key={i} /> : <StarHalf color={redA200} key={i} />
                } else {
                    return circle ? <Circle color={redA200} size="24" key={i} /> : <Star color={redA200} key={i} />
                }
            }
            )}
        </div>
    );
};

Ratting.propTypes = {
    rating: PropTypes.number.isRequired,
    circle: PropTypes.bool,
};

export default Ratting;