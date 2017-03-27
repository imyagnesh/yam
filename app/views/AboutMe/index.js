import React, { Component, PropTypes } from 'react';
import messages from './messages';
import { CoverImg } from '../../components';
import coverImage from '../../common/videos/cover.jpg';
import RichEditor from './../../containers/RichEditor';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <CoverImg
                    posterImg={coverImage}
                    headerText={messages.headerText}
                    subHeaderText={messages.subHeaderText}
                    />
                    <RichEditor />
            </div>
        );
    }
}

AboutMe.propTypes = {

};

export default AboutMe;