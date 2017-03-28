import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import SkillForm from '../../components/SkillForm';

import { getSkill, makeSkillLoading, makeSkillError } from './../../selectors/skillSelector';
import * as skillAction from './../../actions/skillAction';

class Skill extends Component {
	constructor(props) {
		super(props);
		this.submitSkill = this.submitSkill.bind(this);
	}

	submitSkill(values) {
		const fd = new FormData();
		Object.keys(values.toJS()).forEach(key => fd.append(key, values.get(key)));
		this.props.skillAction.skillSave(fd);
	}
	render() {
		return (
			<div>
				<SkillForm onSubmit={this.submitSkill} loading={this.props.loading} />
			</div>
		);
	}
}

Skill.propTypes = {
	loading: PropTypes.bool.isRequired,
	skillAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		skillAction: bindActionCreators(skillAction, dispatch),
	};
}

const mapStateToProps = createStructuredSelector({
	skill: getSkill(),
	loading: makeSkillLoading(),
	error: makeSkillError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Skill);