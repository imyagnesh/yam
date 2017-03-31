import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AboutMeForm from '../../components/AboutMeForm';
import * as aboutMeAction from './../../actions/aboutMeAction';

class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.submitAboutMe = this.submitAboutMe.bind(this);
	}

	submitAboutMe(values) {
		this.props.aboutMeAction.aboutMeSave(values);
	}
	render() {
		return (
			<div>
				<AboutMeForm onSubmit={this.submitAboutMe} loading={this.props.aboutMe.loading} />
			</div>
		);
	}
}

AboutMe.propTypes = {
	aboutMe: PropTypes.object.isRequired,
	aboutMeAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		aboutMeAction: bindActionCreators(aboutMeAction, dispatch),
	};
}

const mapStateToProps = (state) => ({
  aboutMe: state.aboutMe,
});


export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);