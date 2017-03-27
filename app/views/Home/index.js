import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import PosterImg from '../../common/videos/cover.jpg';
import PosterVideoMp4 from '../../common/videos/cover.mp4';
import PosterVideoWebm from '../../common/videos/cover.webm';
import { CoverVideo, HomeQuality, ContactSection, HomeAbout, HomeSkills, HomeExperience, HomeEducation, HomePortfolio } from '../../components';

import messages from './messages';

const Home = props => {
    return (
        <div>
            <CoverVideo
                PosterImg={PosterImg}
                PosterVideoWebm={PosterVideoWebm}
                PosterVideoMp4={PosterVideoMp4}
                headerText={messages.headerText}
                subHeaderText={messages.subHeaderText}
                headerButtonText={messages.headerButtonText}
                />
            <HomeQuality />
            <Divider />
            <HomeAbout />
            <ContactSection
                content="Get a website that looks amazing and actually works."
                buttonLabel="Contact"
                path="./contact" />
            <HomeSkills />
            <ContactSection
                content="Get a website that looks amazing and actually works."
                buttonLabel="Contact"
                path="./contact" />
            <HomeExperience />
            <ContactSection
                content="Get a website that looks amazing and actually works."
                buttonLabel="Contact"
                path="./contact" />
            <HomeEducation />
            <ContactSection
                content="Get a website that looks amazing and actually works."
                buttonLabel="Contact"
                path="./contact" />
            <HomePortfolio />
            <ContactSection
                content="Get a website that looks amazing and actually works."
                buttonLabel="Contact"
                path="./contact" />
            <HomePortfolio />
        </div>
    );
};

Home.propTypes = {

};

export default Home;