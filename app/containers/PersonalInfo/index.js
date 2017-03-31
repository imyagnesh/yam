import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PersonalInfoForm from '../../components/PersonalInfoForm';
import * as personalInfoAction from './../../actions/personalInfoAction';

class PersonalInfo extends Component {
	constructor(props) {
		super(props);
		this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
	}

	submitPersonalInfo(values) {
		const fd = new FormData();
		Object.keys(values).forEach(key => fd.append(key, values[key]));
		this.props.personalInfoAction.personalInfoSave(fd);
	}
	render() {
		return (
			<div>
				<PersonalInfoForm onSubmit={this.submitPersonalInfo} loading={this.props.personalInfo.loading} />
			</div>
		);
	}
}

PersonalInfo.propTypes = {
	personalInfo: PropTypes.object.isRequired,
	personalInfoAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		personalInfoAction: bindActionCreators(personalInfoAction, dispatch),
	};
}

const mapStateToProps = (state) => ({
  personalInfo: state.personalInfo,
});


export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);