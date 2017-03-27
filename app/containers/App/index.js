/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationUp from 'material-ui/svg-icons/navigation/arrow-upward';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Drawer from './../../components/Drawer';
import messages from './messages';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.onDrawerRequestChange = this.onDrawerRequestChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onDrawerRequestChange(open) {
    this.setState({
      open,
    });
  }

  handleScroll() {
    if (window.pageYOffset > 160) {
      const header = document.getElementById('header');
      const scrollButton = document.getElementById('scrollButton');
      header.style.backgroundColor = 'black';
      header.style.boxShadow = 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px';
      scrollButton.parentElement.style.display = 'inline-block';
    }
    else {
      const header = document.getElementById('header');
      const scrollButton = document.getElementById('scrollButton');
      header.style.backgroundColor = 'transparent';
      header.style.boxShadow = 'none';
      scrollButton.parentElement.style.display = 'none';
    }
  }

  scrollTop() {
    event.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application' },
          ]}
        />
        <Header
          pathname={this.props.pathname}
          toggleDrawer={this.handleToggle}
          messages={messages}
        />
        <Drawer
          drawerState={this.state.open}
          toggleDrawer={this.handleToggle}
          onDrawerRequestChange={this.onDrawerRequestChange}
          messages={messages}
        />
        <FloatingActionButton
          id="scrollButton"
          mini={true}
          secondary={true}
          onClick={this.scrollTop}
          style={{ position: 'fixed', bottom: 20, right: 20, display: 'none', zIndex: 2, transition: 'all 0.5s ease' }}>

          <NavigationUp />
        </FloatingActionButton>
        {React.Children.toArray(this.props.children)}
        <Footer messages={messages} />
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  pathname: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    pathname: ownProps.location.pathname,
  };
}

export default connect(mapStateToProps)(App);
