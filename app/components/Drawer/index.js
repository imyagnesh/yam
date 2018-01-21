import React, {PropTypes} from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';

import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';

import HomeIcon from 'material-ui/svg-icons/action/home';
import AboutIcon from 'material-ui/svg-icons/social/person';
import BlogIcon from 'material-ui/svg-icons/content/create';
import ContactIcon from 'material-ui/svg-icons/content/send';
import PortfolioIcon from 'material-ui/svg-icons/action/work';
import ResumeIcon from 'material-ui/svg-icons/action/description';
import photoTop from '../../common/images/photo-top.jpg';

const DrawerWrapper = styled(Drawer)`
  display: none;
  @media screen and (max-width: 1024px) {
      display: block;
  }
`;

const ListItemWrapper = styled(ListItem)`
  height: 166px;
  background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${photoTop})!important;
  background-size: cover!important;
  color: white!important;
`;


const IconComponents = { HomeIcon, AboutIcon, ResumeIcon, PortfolioIcon, BlogIcon, ContactIcon };

const componentName = ({ drawerState, onDrawerRequestChange, toggleDrawer, messages }) => {
  const changePath = (value) => {
    browserHistory.push(value);
  };
  return (
    <DrawerWrapper
      docked={false}
      open={drawerState}
      onRequestChange={onDrawerRequestChange}
    >
      <ListItemWrapper
      onTouchTap={() => { toggleDrawer(); changePath('/'); }}
        primaryText={<div><Avatar size={60}>Y</Avatar><h3><FormattedMessage {...messages.FirstName} /> <FormattedMessage {...messages.LastName} /></h3></div>}
        secondaryText={<h5 style={{ color: 'white' }}><FormattedMessage {...messages.menuHeaderDescription} /></h5>}
      />
      {
        messages.menu.map((item, index) =>
          <div key={index}>
            <ListItem
              primaryText={<FormattedMessage {...item} />}
              onTouchTap={() => { toggleDrawer(); changePath(item.path); }}
              leftIcon={React.createElement(IconComponents[item.icon])}
            />
            <Divider />
          </div>
        )
      }
    </DrawerWrapper>
  );
};

componentName.propTypes = {
  drawerState: PropTypes.bool.isRequired,
  onDrawerRequestChange: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired,
};

export default componentName;
