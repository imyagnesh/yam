import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FacebookIcon from 'react-icons/lib/fa/facebook';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import LinkedinIcon from 'react-icons/lib/fa/linkedin';
import MailIcon from 'react-icons/lib/fa/envelope';
import SectionHeader from '../SectionHeader';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  position: relative;
  overflow: hidden;
  max-width: 1280px;
margin: 0 auto;
  & > * {
  flex: 1 1 0%;
  margin: 10px;
}
`;

const NavWrapper = styled.nav`
    align-self: center;
`;


const ContactSocial = props => {
    return (
        <Wrapper>
            <SectionHeader
                caption="you can also contact me though socila media"
                title="I am social"
                />
            <NavWrapper>
                <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<FacebookIcon />} />
                <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<TwitterIcon />} />
                <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<InstagramIcon />} />
                <FloatingActionButton mini secondary style={{ margin: '8px' }} children={<LinkedinIcon />} />
                <FloatingActionButton mini secondary style={{ margin: '10px' }} children={<MailIcon />} />
            </NavWrapper>
        </Wrapper>
    );
};

ContactSocial.propTypes = {

};

export default ContactSocial;