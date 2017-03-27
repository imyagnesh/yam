import React, { PropTypes } from 'react';
import Star from 'material-ui/svg-icons/toggle/star';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {
    redA200,
} from 'material-ui/styles/colors';

const Ratting = ({rating}) => {
    return (
        <div>
            {[...Array(5)].map((x, i) => {
                const val = rating - i;
                if (val <= 0 ) {
                    return <StarBorder color={redA200} key={i} />
                } else if (val > 0 && val <= 0.5) {
                    return <StarHalf color={redA200} key={i} />
                } else {
                    return <Star color={redA200} key={i} />
                }
            }
            )}
        </div>
    );
};

Ratting.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Ratting;