import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Divider from 'material-ui/Divider';
import PosterImg from '../../common/videos/cover.jpg';
import PosterVideoMp4 from '../../common/videos/cover.mp4';
import PosterVideoWebm from '../../common/videos/cover.webm';
import {
    CoverVideo,
    HomeQuality,
    ContactSection,
    HomeAbout,
    HomeSkills,
    HomeExperience,
    HomeEducation,
    HomePortfolio
} from '../../components';

import { DEFAULT_LOCALE } from '../../constants'

import messages from './messages';
import * as aboutMeAction from './../../actions/aboutMeAction';
import * as contactInfoAction from './../../actions/contactInfoAction';
import * as educationAction from './../../actions/educationAction';
import * as personalInfoAction from './../../actions/personalInfoAction';
import * as projectAction from './../../actions/projectAction';
import * as skillAction from './../../actions/skillAction';
import * as workExpAction from './../../actions/workExpAction';



class Home extends Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount() {
        this.props.aboutMeAction.aboutMeLoad(DEFAULT_LOCALE);
        this.props.contactInfoAction.contactInfoLoad();
        this.props.educationAction.educationLoad();
        this.props.personalInfoAction.personalInfoLoad();
        this.props.projectAction.projectLoad();
        this.props.skillAction.skillLoad();
        this.props.workExpAction.workExpLoad();
    }
    
    render() {
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
    }
}


Home.propTypes = {
    personalInfo: PropTypes.object.isRequired,
    aboutMe: PropTypes.object.isRequired,
    contactInfo: PropTypes.object.isRequired,
    skill: PropTypes.object.isRequired,
    education: PropTypes.object.isRequired,
    workExp: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
    aboutMeAction: PropTypes.object.isRequired,
    contactInfoAction: PropTypes.object.isRequired,
    educationAction: PropTypes.object.isRequired,
    personalInfoAction: PropTypes.object.isRequired,
    projectAction: PropTypes.object.isRequired,
    skillAction: PropTypes.object.isRequired,
    workExpAction: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    personalInfo: state.personalInfo,
    aboutMe: state.aboutMe,
    contactInfo: state.contactInfo,
    skill: state.skill,
    education: state.education,
    workExp: state.workExp,
    project: state.project,
});

function mapDispatchToProps(dispatch) {
    return {
        aboutMeAction: bindActionCreators(aboutMeAction, dispatch),
        contactInfoAction: bindActionCreators(contactInfoAction, dispatch),
        educationAction: bindActionCreators(educationAction, dispatch),
        personalInfoAction: bindActionCreators(personalInfoAction, dispatch),
        projectAction: bindActionCreators(projectAction, dispatch),
        skillAction: bindActionCreators(skillAction, dispatch),
        workExpAction: bindActionCreators(workExpAction, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
