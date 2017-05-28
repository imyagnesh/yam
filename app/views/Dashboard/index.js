import React, { Component } from 'react';
import AboutMe from './../../containers/AboutMe';
import PersonalInfo from './../../containers/PersonalInfo';
import ContactInfo from './../../containers/ContactInfo';
import Skill from './../../containers/Skill';
import Education from './../../containers/Education';
import WorkExp from './../../containers/WorkExp';
import Project from './../../containers/Project';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<AboutMe />
				<PersonalInfo />
				<ContactInfo />
				<Skill />
				<Education />
				<WorkExp />
				<Project />
			</div>
		);
	}
}

export default Dashboard;