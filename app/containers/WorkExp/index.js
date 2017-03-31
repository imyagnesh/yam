import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WorkExpForm from '../../components/WorkExpForm';
import * as workExpAction from './../../actions/workExpAction';

class WorkExp extends Component {
	constructor(props) {
		super(props);
		this.submitWorkExp = this.submitWorkExp.bind(this);
	}

	submitWorkExp(values) {
		const fd = new FormData();
		Object.keys(values).forEach(key => fd.append(key, values[key]));
		this.props.workExpAction.workExpSave(fd);
	}
	render() {
		return (
			<div>
				<WorkExpForm onSubmit={this.submitWorkExp} loading={this.props.workExp.loading} />
			</div>
		);
	}
}

WorkExp.propTypes = {
	workExp: PropTypes.object.isRequired,
	workExpAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		workExpAction: bindActionCreators(workExpAction, dispatch),
	};
}

const mapStateToProps = (state) => ({
  workExp: state.workExp,
});


export default connect(mapStateToProps, mapDispatchToProps)(WorkExp);