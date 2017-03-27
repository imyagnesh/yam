import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import muiTheme from '../../muiTheme';

class Main extends Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Helmet titleTemplate="%s - Yagnesh Modh" defaultTitle="Yagnesh Modh" meta={[{ name: 'description', content: 'Personal Application' }]} />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

Main.propTypes = {
	children: PropTypes.node,
	pathname: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
	return {
		pathname: ownProps.location.pathname,
	};
}

export default connect(mapStateToProps)(Main);
