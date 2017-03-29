import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import EducationForm from '../../components/EducationForm';

import { getEducation, makeEducationLoading, makeEducationError } from './../../selectors/educationSelector';
import * as educationAction from './../../actions/educationAction';

class Education extends Component {
	constructor(props) {
		super(props);
		this.submitEducation = this.submitEducation.bind(this);
	}

	submitEducation(values) {
		console.log(values.toJSON());
		const fd = new FormData();
		Object.keys(values.toJS()).forEach(key => {
			const value  = values.get(key);
			if (value) {
				if (key === 'achievements') {
					fd.append(key, JSON.stringify(value));
				} else {
					fd.append(key, value);
				}
			}
		});
		this.props.educationAction.educationSave(fd);
	}
	render() {
		return (
			<div>
				<EducationForm onSubmit={this.submitEducation} loading={this.props.loading} />
			</div>
		);
	}
}

Education.propTypes = {
	loading: PropTypes.bool.isRequired,
	educationAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		educationAction: bindActionCreators(educationAction, dispatch),
	};
}

const mapStateToProps = createStructuredSelector({
	education: getEducation(),
	loading: makeEducationLoading(),
	error: makeEducationError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Education);