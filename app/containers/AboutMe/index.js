import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import AboutMeForm from '../../components/AboutMeForm';

import { getAboutMe, makeAboutMeLoading, makeAboutMeError } from './../../selectors/aboutMeSelector';
import * as aboutMeAction from './../../actions/aboutMeAction';

class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.submitAboutMe = this.submitAboutMe.bind(this);
	}

	submitAboutMe(values) {
		this.props.aboutMeAction.aboutMeSave(values.toJSON());
	}
	render() {
		return (
			<div>
				<AboutMeForm onSubmit={this.submitAboutMe} loading={this.props.loading} />
			</div>
		);
	}
}

AboutMe.propTypes = {
	loading: PropTypes.bool.isRequired,
	aboutMeAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		aboutMeAction: bindActionCreators(aboutMeAction, dispatch),
	};
}

const mapStateToProps = createStructuredSelector({
	aboutMe: getAboutMe(),
	loading: makeAboutMeLoading(),
	error: makeAboutMeError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);