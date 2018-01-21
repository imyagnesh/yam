import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import logoImg from '../../common/images/logo.png';

import LocaleSelect from '../../containers/LocaleSelect';

const LeftElementWrapper = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
      display: block;
  }
`;

const RightElementWrapper = styled.div`
  display: flex;
`;

const TabsElement = styled(Tabs) `
  width: 40em;
  @media screen and (max-width: 1024px) {
    display: none;  
  }
`;

const LogoWrapper = styled.div`
  height: 64px;
  @media screen and (max-width: 1024px) {
      text-align: center;
  }
`;

const LogoImage = styled.img`
  width: 36px;
  height: 36px;
`;

const Header = ({ pathname, toggleDrawer, messages }) => {

    const changePath = (value) => {
        browserHistory.push(value);
    };
    const iconElementRight = (
        <RightElementWrapper>
            <TabsElement value={pathname} onChange={changePath}>
                {
                    messages.menu.map((item, index) =>
                        <Tab key={index} label={<FormattedMessage {...item} />} value={item.path} />
                    )
                }
            </TabsElement>
            <LocaleSelect />
        </RightElementWrapper>
    );
    const iconElementLeft = (
        <LeftElementWrapper>
            <IconButton iconStyle={{ color: 'white' }} onTouchTap={toggleDrawer}><NavigationMenu /></IconButton>
        </LeftElementWrapper>
    );
    const logoElement = (
        <LogoWrapper>
            <IconButton
                onTouchTap={() => { changePath('/'); } }
                style={{ padding: 0, fontSize: 'none' }}
                >
                <LogoImage src={logoImg} alt="Logo" />
            </IconButton>
        </LogoWrapper>
    );
    return (
        <AppBar
            id="header"
            style={{ position: 'fixed', backgroundColor: 'transparent', boxShadow: 'none', transition: 'all 0.5s ease' }}
            title={logoElement}
            iconElementLeft={iconElementLeft}
            iconElementRight={iconElementRight}
            />
    );
};

Header.propTypes = {
    pathname: PropTypes.string.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    messages: PropTypes.object.isRequired,
};

export default Header;