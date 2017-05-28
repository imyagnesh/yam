import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FacebookIcon from 'react-icons/lib/fa/facebook';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import LinkedinIcon from 'react-icons/lib/fa/linkedin';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;
`;

const H3 = styled.h3`
	margin: 10px;
	color: rgb(255, 82, 82);
`;



const AboutMeBack = props => {
	return (
		<Wrapper>
			<H3>Personal Information</H3>
			<List>
				<ListItem primaryText="Yagnesh Modh" leftIcon={<ContentInbox />} />
				<ListItem primaryText="4th August, 1987" leftIcon={<ContentInbox />} />
				<ListItem primaryText="+91-8690090417" leftIcon={<ActionGrade />} />
				<ListItem primaryText="yagnesh.modh@gmail.com" leftIcon={<ContentSend />} />
				<ListItem primaryText="Bangalore, India" leftIcon={<ContentDrafts />} />
			</List>
			<div>
				<FloatingActionButton mini secondary style={{ margin: '8px' }} children={<FacebookIcon />} />
				<FloatingActionButton mini secondary style={{ margin: '8px' }} children={<TwitterIcon />} />
				<FloatingActionButton mini secondary style={{ margin: '8px' }} children={<InstagramIcon />} />
				<FloatingActionButton mini secondary style={{ margin: '8px' }} children={<LinkedinIcon />} />
			</div>
		</Wrapper>
	);
};

AboutMeBack.propTypes = {

};

export default AboutMeBack;