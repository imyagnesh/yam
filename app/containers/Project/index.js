import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProjectForm from '../../components/ProjectForm';

import * as technologyAction from './../../actions/technologyAction';

class Project extends Component {
	constructor(props) {
		super(props);
		this.submitProject = this.submitProject.bind(this);
	}

	componentWillMount() {
		this.props.technologyAction.loadTechnology();
	}

	submitProject(values) {
		console.log(values);
		// const fd = new FormData();
		// Object.keys(values).forEach(key => {
		// 	if (Array.isArray(values[key])) {
		// 		values[key].forEach(function (element, i) {
		// 			if (element.constructor.name === 'File') {
		// 				fd.append(`${key}_${i}`, element);
		// 			}
		// 		}, this);
		// 	}
		// 	fd.append(key, values[key]);
		// });
		// this.props.educationAction.educationSave(fd);
	}


	render() {
		console.log(this.props.technology.technology);
		return (
			<div>
				<ProjectForm onSubmit={this.submitProject} technology={this.props.technology.technology} />
			</div>
		);
	}
}

Project.propTypes = {
	technology: PropTypes.object.isRequired,
	technologyAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		technologyAction: bindActionCreators(technologyAction, dispatch),
	};
}

const mapStateToProps = (state) => ({
	technology: state.technology,
});


export default connect(mapStateToProps, mapDispatchToProps)(Project);