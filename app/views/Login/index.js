import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LoginForm } from '../../components';
import * as loginActions from './../../actions/loginActions';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

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
			<AppWrapper>
				<LoginForm onSubmit={this.login} />
			</AppWrapper>
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
