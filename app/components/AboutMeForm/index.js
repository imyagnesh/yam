import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import MenuItem from 'material-ui/MenuItem';
import SelectField from './../../InputComponents/renderSelectField';
import TextField from './../../InputComponents/renderTextField';
import { appLocales } from '../../i18n';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
		margin: 10px;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

const AboutMeForm = props => {
	const { handleSubmit, pristine, loading } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<SendButton>
				<h2>Dashboard</h2>
			</SendButton>
			<Field name="aboutMe" component={TextField} floatingLabelText="About Me" rows={3} fullWidth multiLine />
			<Field name="funFacts" component={TextField} floatingLabelText="Fun Facts" rows={3} fullWidth multiLine />
			<Field name="passion" component={TextField} floatingLabelText="Passion" rows={3} fullWidth multiLine />
			<Field name="mylife" component={TextField} floatingLabelText="My Life" rows={3} fullWidth multiLine />
			<Field name="language" component={SelectField} floatingLabelText="Language" fullWidth>
				{
					appLocales.map((value) =>
						<MenuItem
							key={value}
							value={value}
							primaryText={value}
						/>
					)
				}
			</Field>
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

AboutMeForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'AboutMeForm',
})(AboutMeForm);
