import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form/immutable';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import MenuItem from 'material-ui/MenuItem';
import { appLocales } from '../../i18n';

import {
  SelectField,
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
	const requiredFields = ['aboutMe', 'funFacts', 'passion', 'mylife', 'language'];
	requiredFields.forEach(field => {
		if (!values.get(field)) {
			errors[field] = 'Required';
		}
	});
	return errors;
};

const AboutMeForm = props => {
	const { handleSubmit, pristine, loading } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="aboutMe" component={TextField} floatingLabelText="About Me" />
			<Field name="funFacts" component={TextField} floatingLabelText="Fun Facts" />
			<Field name="passion" component={TextField} floatingLabelText="Passion" />
			<Field name="mylife" component={TextField} floatingLabelText="My Life" />
			<Field name="language" component={SelectField} floatingLabelText="Language">
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
	validate
})(AboutMeForm);
