import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FileInput from './../../InputComponents/renderFileInput';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';
import TextField from './../../InputComponents/renderTextField';
import Slider from './../../InputComponents/renderSlider';

const FormWraper = styled.form`
    flex-direction: column;
    display: flex;
`;

const SendButton = styled.div`
    align-self: center;
    margin: 1em;
`;

const SkillForm = props => {
	const { handleSubmit, pristine, loading } = props;
	return (
		<FormWraper onSubmit={handleSubmit}>
			<Field name="skillName" component={TextField} floatingLabelText="name" />
			<Field name="website" component={TextField} floatingLabelText="website" />
			<Field name="description" component={TextField} floatingLabelText="description" />
			<Field name="skillLogo" component={FileInput} label="logo" multiple={false} accept="image/*" />
			<Field name="ratting" component={Slider} min={0} max={5} step={0.5} defaultValue={2.5} format={null}/>
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

SkillForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	pristine: PropTypes.bool.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default reduxForm({
	form: 'skillForm',
})(SkillForm);
