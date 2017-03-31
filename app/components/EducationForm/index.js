import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FileInput from './../FileInput';
import { Field, FieldArray, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import TextField from './../../InputComponents/renderTextField';
import DatePicker from './../../InputComponents/renderDatePicker';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

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


const EducationForm = props => {
	const { handleSubmit, pristine, loading } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="collageName" component={TextField} floatingLabelText="collageName" />
			<Field name="collageWebsite" component={TextField} floatingLabelText="collageWebsite" />
			<Field name="description" component={TextField} floatingLabelText="description" />
			<Field name="collageLogo" component={FileInput} label="collageLogo" accept="image/*" multiple={false} />
			<Field name="university" component={TextField} floatingLabelText="university" />
			<Field name="degree" component={TextField} floatingLabelText="degree" />
			<Field name="joiningDate" component={DatePicker} format={null} floatingLabelText="joiningDate" />
			<Field name="leavingDate" component={DatePicker} format={null} floatingLabelText="leavingDate" />
			<Field name="percentage" component={TextField} floatingLabelText="percentage" />
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

EducationForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'educationForm',
})(EducationForm);
