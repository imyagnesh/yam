import React, { Component } from 'react';
import AboutMe from './../../containers/AboutMe';
import PersonalInfo from './../../containers/PersonalInfo';
import ContactInfo from './../../containers/ContactInfo';
import Skill from './../../containers/Skill';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1>Dashboard</h1>
				<AboutMe />
				<PersonalInfo />
				<ContactInfo />
				<Skill />
			</div>
		);
	}
}

export default Dashboard;