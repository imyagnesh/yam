import React, { Component, PropTypes } from 'react';
import messages from './messages';
import { CoverImg } from '../../components';
import coverImage from '../../common/videos/cover.jpg';

const Blog = props => {
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

Blog.propTypes = {

};

export default Blog;