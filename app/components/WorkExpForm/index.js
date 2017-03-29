import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FileInput from './../FileInput';
import { Field, FieldArray, reduxForm } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import {
	TextField,
	DatePicker,
	Checkbox,
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
	const requiredFields = ['companyName', 'companyWebsite', 'description', 'companyLogo', 'designation', 'role', 'joiningDate', 'leavingDate'];
	requiredFields.forEach(field => {
		if (!values.get(field)) {
			errors[field] = 'Required';
		}
	});
	return errors;
};

const renderAchievements = ({ fields, meta: { error } }) => (
	<ul>
		<li>
			<FlatButton label="Add Achievement" primary={true} onClick={() => fields.push()} />
		</li>
		{fields.map((achievement, index) =>
			<li key={index}>
				<IconButton onClick={() => fields.remove(index)}>
					<ActionDelete />
				</IconButton>
				<Field
					name={achievement}
					type="text"
					component={TextField}
					floatingLabelText={`Achievement #${index + 1}`} />
			</li>
		)}
		{error && <li className="error">{error}</li>}
	</ul>
);


const WorkExpForm = props => {
	const { handleSubmit, pristine, loading } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="companyName" component={TextField} floatingLabelText="companyName" />
			<Field name="companyWebsite" component={TextField} floatingLabelText="companyWebsite" />
			<Field name="description" component={TextField} floatingLabelText="description" />
			<Field name="companyLogo" component={FileInput} label="companyLogo" multiple={false} accept="image/*" />
			<Field name="designation" component={TextField} floatingLabelText="designation" />
			<Field name="role" component={TextField} floatingLabelText="role" />
			<Field name="joiningDate" component={DatePicker} format={null} floatingLabelText="joiningDate" />
			<Field name="leavingDate" component={DatePicker} format={null} floatingLabelText="leavingDate" />
			<Field name="isPressent" component={Checkbox} label="isPressent"/>
			<FieldArray name="achievements" component={renderAchievements} />
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

WorkExpForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'workExpForm',
	validate
})(WorkExpForm);
