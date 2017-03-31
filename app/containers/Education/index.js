import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import EducationForm from '../../components/EducationForm';
import * as educationAction from './../../actions/educationAction';

class Education extends Component {
	constructor(props) {
		super(props);
		this.submitEducation = this.submitEducation.bind(this);
	}

	submitEducation(values) {
		const fd = new FormData();
		Object.keys(values).forEach(key => fd.append(key, values[key]));
		this.props.educationAction.educationSave(fd);
	}
	render() {
		return (
			<div>
				<EducationForm onSubmit={this.submitEducation} loading={this.props.education.loading} />
			</div>
		);
	}
}

Education.propTypes = {
	education: PropTypes.object.isRequired,
	educationAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		educationAction: bindActionCreators(educationAction, dispatch),
	};
}

const mapStateToProps = (state) => ({
  education: state.education,
});


export default connect(mapStateToProps, mapDispatchToProps)(Education);