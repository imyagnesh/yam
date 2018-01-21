import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { connect } from "react-redux";

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

class Admin extends Component {
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
          meta={[
            {
              name: "description",
              content: "Yagnesh Modh Personal Application"
            }
          ]}
        />
        {this.props.children}
      </AppWrapper>
    );
  }
}

Admin.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    pathname: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(Admin);
