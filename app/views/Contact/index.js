import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import messages from './messages';
import { CoverImg, SectionHeader, ContactForm, GoogleMap, ContactInfo, ContactSocial } from '../../components';
import coverImage from '../../common/videos/cover.jpg';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    max-width: 1280px;
    margin: 0 auto;
    & > * {
    flex: 1 1 0%;
    margin: 10px;
    };
    @media screen and (min-width: 1280px) {
        flex-direction: row;
        display: flex;
    };
`;

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            languageId: props.locale,
            markers: [{
                position: {
                    lat: 12.849830,
                    lng: 77.646654,
                },
                key: 'Bangalore',
                defaultAnimation: 2,
            }],
        };

        this.sendContact = this.sendContact.bind(this);
    }

    sendContact() {
        const promise = new Promise((resolve) => {
            setTimeout(() => {  // simulate server latency
                // To Do:Add Send Contact Functionality
                resolve();
            }, 500);
        });
        promise();
    }

    render() {
        return (
            <main>
                <CoverImg
                    posterImg={coverImage}
                    headerText={messages.headerText}
                    subHeaderText={messages.subHeaderText}
                    />
                <SectionHeader
                    caption="if you think I am suitable for your project or if you'd just like to say 'hello', feel free to get in touch"
                    title="Don't be shy, say hi!"
                    />
                <ContentWrapper>
                    <ContactForm
                        messages={messages}
                        onSubmit={this.sendContact}
                        />
                    <GoogleMap
                        markers={this.state.markers}
                        languageId={this.state.languageId}
                        />
                </ContentWrapper>
                <ContactInfo
                    messages={messages}
                    />
                <ContactSocial />
            </main>
        );
    }
}

Contact.propTypes = {
    locale: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  locale: state.language,
});

export default connect(mapStateToProps)(Contact);
