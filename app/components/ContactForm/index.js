import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
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

const WrapperDiv = styled.div`
    @media screen and (min-width: 600px) {
        flex-direction: row;
        display: flex;
    }
`;


const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        errorStyle={{ display: 'none' }}
        fullWidth
        {...input}
        {...custom}
        />
);


const ContactForm = (({ messages, handleSubmit, pristine, submitting }) =>
    <FormWraper onSubmit={handleSubmit}>
        <WrapperDiv>
            <Field name="firstName" component={renderTextField} label="First Name" />
            <div style={{ flexBasis: '5%' }} />
            <Field name="lastName" component={renderTextField} label="Last Name" />
        </WrapperDiv>
        <WrapperDiv>
            <Field name="contact" component={renderTextField} label="Mobile Number" />
            <div style={{ flexBasis: '5%' }} />
            <Field name="email" component={renderTextField} label="Email Address" />
        </WrapperDiv>
        <div>
            <Field name="subject" component={renderTextField} label="Subject" />
        </div>
        <div>
            <Field name="message" component={renderTextField} label="Message" rows={3} multiLine />
        </div>
        <SendButton>
            <RaisedButton
                style={{ height: '50px', minWidth: '150px' }}
                labelStyle={{ lineHeight: '50px' }}
                secondary
                label="Send"
                labelPosition="before"
                type="submit"
                icon={<ContentSend />}
                disabled={pristine || submitting}
                />
        </SendButton>
    </FormWraper>
);

ContactForm.propTypes = {
    messages: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
    form: 'ContactForm',
})(ContactForm);
