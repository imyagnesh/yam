import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import TextField from './../../InputComponents/renderTextField';
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

const ContactForm = (({ messages, handleSubmit, pristine, submitting }) =>
    <FormWraper onSubmit={handleSubmit}>
        <WrapperDiv>
            <Field name="firstName" component={TextField} floatingLabelText="First Name" fullWidth />
            <div style={{ flexBasis: '5%' }} />
            <Field name="lastName" component={TextField} floatingLabelText="Last Name" fullWidth />
        </WrapperDiv>
        <WrapperDiv>
            <Field name="contact" component={TextField} floatingLabelText="Mobile Number" fullWidth/>
            <div style={{ flexBasis: '5%' }} />
            <Field name="email" component={TextField} floatingLabelText="Email Address" fullWidth />
        </WrapperDiv>
        <div>
            <Field name="subject" component={TextField} floatingLabelText="Subject" fullWidth/>
        </div>
        <div>
            <Field name="message" component={TextField} floatingLabelText="Message" rows={3} multiLine fullWidth />
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
