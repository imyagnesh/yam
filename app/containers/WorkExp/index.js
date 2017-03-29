import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import WorkExpForm from '../../components/WorkExpForm';

import { getWorkExp, makeWorkExpLoading, makeWorkExpError } from './../../selectors/workExpSelector';
import * as workExpAction from './../../actions/workExpAction';

class WorkExp extends Component {
	constructor(props) {
		super(props);
		this.submitWorkExp = this.submitWorkExp.bind(this);
	}

	submitWorkExp(values) {
		console.log(values.toJSON());
		const fd = new FormData();
		Object.keys(values.toJS()).forEach(key => {
			const value  = values.get(key);
			if (value) {
				if (key === 'achievements') {
					fd.append(key, JSON.stringify(value));
				} else {
					fd.append(key, value);
				}
			}
		});
		this.props.workExpAction.workExpSave(fd);
	}
	render() {
		return (
			<div>
				<WorkExpForm onSubmit={this.submitWorkExp} loading={this.props.loading} />
			</div>
		);
	}
}

WorkExp.propTypes = {
	loading: PropTypes.bool.isRequired,
	workExpAction: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		workExpAction: bindActionCreators(workExpAction, dispatch),
	};
}

const mapStateToProps = createStructuredSelector({
	workExp: getWorkExp(),
	loading: makeWorkExpLoading(),
	error: makeWorkExpError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkExp);