import React, {PropTypes} from 'react';
import messages from './messages';
import { CoverImg } from '../../components';
import coverImage from '../../common/videos/cover.jpg';

const Portfolio = props => {
    return (
        <div>
            <CoverImg
                posterImg={coverImage}
                headerText={messages.headerText}
                subHeaderText={messages.subHeaderText}
                />
        </div>
    );
};

Portfolio.propTypes = {
    
};

export default Portfolio;