import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import { LoginForm } from '../../components';
import * as loginActions from './../../actions/loginActions';

const style = {
	height: 400,
	width: 400,
	textAlign: 'center',
	display: 'inline-block',
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
	}

	login(values) {
		this.props.actions.login(values);
	}

	render() {
		return (
			<Paper style={style} zDepth={1}>
				<LoginForm onSubmit={this.login} />
			</Paper>
		);
	}
}

Login.propTypes = {
	login: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(loginActions, dispatch),
	};
}

const mapStateToProps = (state) => ({
  login: state.login,
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
