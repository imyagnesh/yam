import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import {
  TextField,
} from 'redux-form-material-ui';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

const validate = values => {
	const errors = {};
	const requiredFields = ['houseDetail', 'city', 'state', 'country', 'pincode','mobile', 'email', 'website'];
	requiredFields.forEach(field => {
		if (!values.get(field)) {
			errors[field] = 'Required';
		}
	});
	return errors;
};

const ContactInfoForm = props => {
	const { handleSubmit, pristine, loading } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="houseDetail" component={TextField} floatingLabelText="houseDetail" />
			<Field name="streetName" component={TextField} floatingLabelText="streetName" />
			<Field name="area" component={TextField} floatingLabelText="area" />
			<Field name="city" component={TextField} floatingLabelText="city" />
			<Field name="state" component={TextField} floatingLabelText="state" />
			<Field name="country" component={TextField} floatingLabelText="country" />
			<Field name="pincode" component={TextField} floatingLabelText="pincode" />
			<Field name="landmark" component={TextField} floatingLabelText="landmark" />
			<Field name="mobile" component={TextField} floatingLabelText="mobile" />
			<Field name="email" component={TextField} floatingLabelText="email" />
			<Field name="website" component={TextField} floatingLabelText="website" />			
			<SendButton>
				<RaisedButton
					style={{ height: '50px', minWidth: '150px' }}
					labelStyle={{ lineHeight: '50px' }}
					secondary
					label={loading ? 'Sending..' : 'Send'}
					labelPosition="before"
					type="submit"
					icon={<ContentSend />}
					disabled={pristine || loading}
				/>
			</SendButton>
		</FormWraper>
	);
};

ContactInfoForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'ContactInfoForm',
	validate
})(ContactInfoForm);
