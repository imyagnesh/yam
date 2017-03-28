import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import ContactInfoForm from '../../components/ContactInfoForm';

import { getContactInfo, makeContactInfoLoading, makeContactInfoError } from './../../selectors/contactInfoSelector';
import * as contactInfoAction from './../../actions/contactInfoAction';

class ContactInfo extends Component {
	constructor(props) {
		super(props);
		this.submitContactInfo = this.submitContactInfo.bind(this);
	}

	submitContactInfo(values) {
		this.props.contactInfoAction.contactInfoSave(values.toJSON());
	}
	render() {
		return (
			<div>
				<ContactInfoForm onSubmit={this.submitContactInfo} loading={this.props.loading} />
			</div>
		);
	}
}

ContactInfo.propTypes = {
	loading: PropTypes.bool.isRequired,
	contactInfoAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		contactInfoAction: bindActionCreators(contactInfoAction, dispatch),
	};
}

const mapStateToProps = createStructuredSelector({
	contactInfo: getContactInfo(),
	loading: makeContactInfoLoading(),
	error: makeContactInfoError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);