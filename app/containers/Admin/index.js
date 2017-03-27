import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class Admin extends Component {
	render() {
		return (
			<div>
				<Helmet
					titleTemplate="%s - React.js Boilerplate"
					defaultTitle="React.js Boilerplate"
					meta={[
						{ name: 'description', content: 'A React.js Boilerplate application' },
					]}
				/>
				{this.props.children}
			</div>
		);
	}
}

Admin.propTypes = {
	children: PropTypes.node,
	pathname: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
	return {
		pathname: ownProps.location.pathname,
	};
}

export default connect(mapStateToProps)(Admin);
