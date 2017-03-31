import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactInfoForm from '../../components/ContactInfoForm';
import * as contactInfoAction from './../../actions/contactInfoAction';

class ContactInfo extends Component {
	constructor(props) {
		super(props);
		this.submitContactInfo = this.submitContactInfo.bind(this);
	}

	submitContactInfo(values) {
		this.props.contactInfoAction.contactInfoSave(values);
	}
	render() {
		return (
			<div>
				<ContactInfoForm onSubmit={this.submitContactInfo} loading={this.props.contactInfo.loading} />
			</div>
		);
	}
}

ContactInfo.propTypes = {
	contactInfo: PropTypes.object.isRequired,
	contactInfoAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		contactInfoAction: bindActionCreators(contactInfoAction, dispatch),
	};
}

const mapStateToProps = (state) => ({
  contactInfo: state.contactInfo,
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo);