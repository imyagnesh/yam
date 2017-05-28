import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import TextField from './../../InputComponents/renderTextField';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
		margin: 10px;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

const ContactInfoForm = props => {
	const { handleSubmit, pristine, loading } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
		<SendButton>
				<h2>Contact Info</h2>
		</SendButton>
			<Field name="houseDetail" component={TextField} floatingLabelText="houseDetail" fullWidth/>
			<Field name="streetName" component={TextField} floatingLabelText="streetName" fullWidth/>
			<Field name="area" component={TextField} floatingLabelText="area" fullWidth/>
			<Field name="city" component={TextField} floatingLabelText="city" fullWidth/>
			<Field name="state" component={TextField} floatingLabelText="state" fullWidth/>
			<Field name="country" component={TextField} floatingLabelText="country" fullWidth/>
			<Field name="pincode" component={TextField} floatingLabelText="pincode" fullWidth/>
			<Field name="landmark" component={TextField} floatingLabelText="landmark" fullWidth/>
			<Field name="mobile" component={TextField} floatingLabelText="mobile" fullWidth/>
			<Field name="email" component={TextField} floatingLabelText="email" fullWidth/>
			<Field name="website" component={TextField} floatingLabelText="website" fullWidth/>			
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
})(ContactInfoForm);
