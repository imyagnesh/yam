import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SkillForm from '../../components/SkillForm';
import * as skillAction from './../../actions/skillAction';

class Skill extends Component {
	constructor(props) {
		super(props);
		this.submitSkill = this.submitSkill.bind(this);
	}

	submitSkill(values) {
		const fd = new FormData();
		Object.keys(values).forEach(key => fd.append(key, values[key]));
		this.props.skillAction.skillSave(fd);
	}
	render() {
		return (
			<div>
				<SkillForm onSubmit={this.submitSkill} loading={this.props.skill.loading} />
			</div>
		);
	}
}

Skill.propTypes = {
	skill: PropTypes.object.isRequired,
	skillAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		skillAction: bindActionCreators(skillAction, dispatch),
	};
}

const mapStateToProps = (state) => ({
  skill: state.skill,
});


export default connect(mapStateToProps, mapDispatchToProps)(Skill);