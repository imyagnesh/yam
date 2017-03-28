import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextField from './../TextField';
import { Field, reduxForm } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';

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
			<Field name="houseDetail" component={TextField} label="houseDetail" />
			<Field name="streetName" component={TextField} label="streetName" />
			<Field name="area" component={TextField} label="area" />
			<Field name="city" component={TextField} label="city" />
			<Field name="state" component={TextField} label="state" />
			<Field name="country" component={TextField} label="country" />
			<Field name="pincode" component={TextField} label="pincode" />
			<Field name="landmark" component={TextField} label="landmark" />
			<Field name="mobile" component={TextField} label="mobile" />
			<Field name="email" component={TextField} label="email" />
			<Field name="website" component={TextField} label="website" />			
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
