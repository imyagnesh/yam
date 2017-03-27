import React, {PropTypes} from 'react';
import messages from './messages';
import { CoverImg } from '../../components';
import coverImage from '../../common/videos/cover.jpg';

const Resume = props => {
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

Resume.propTypes = {
    
};

export default Resume;