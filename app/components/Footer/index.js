import React, { PropTypes } from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import { FormattedMessage } from 'react-intl';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import logoImg from '../../common/images/logo.png';

const FooterWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #000;
  color: rgba(255, 255, 255, .4);
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  color: rgba(255, 255, 255, 0.870588);
`;

const ImageStyle = styled.img`
  width: 36px;
  height: 36px;
`;

const IconWrapper = styled.i`
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.870588);
  display: inline-block;
  text-decoration: inherit;
  width: 1em;
  margin-right: .2em;
  text-align: center;
  font-variant: normal;
  text-transform: none;
  line-height: 1em;
  margin-left: .2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

`;

const MenuButton = styled(FlatButton) `
  color: rgba(255, 255, 255, 0.870588)!important;
`;


const Footer = ({ messages }) => {
    const changePath = (value) => {
        browserHistory.push(value);
    };
    return (
        <FooterWrapper>
            <FooterLogo>
                <span><FormattedMessage {...messages.FirstName} /></span>
                <IconButton
                    style={{ padding: '6px' }}
                    onTouchTap={() => { changePath('/'); } }
                    >
                    <ImageStyle src={logoImg} alt="Logo" />
                </IconButton>
                <span><FormattedMessage {...messages.LastName} /></span>
            </FooterLogo>
            <nav>
                {
                    messages.menu.map((item, index) =>
                        <MenuButton
                            key={index}
                            label={<FormattedMessage {...item} />}
                            onTouchTap={() => { changePath(item.path); } }
                            />
                    )
                }
            </nav>
            <p><FormattedMessage {...messages.FooterCopyRight} /></p>
            <nav>
                <IconButton tooltip="Facebook" tooltipPosition="top-center" children={<IconWrapper className="icon-facebook-1">&#xf09a;</IconWrapper>} />
                <IconButton tooltip="Twitter" tooltipPosition="top-center" children={<IconWrapper className="icon-twitter">&#xf099;</IconWrapper>} />
                <IconButton tooltip="Instagram" tooltipPosition="top-center" children={<IconWrapper className="icon-instagram">&#xf16d;</IconWrapper>} />
                <IconButton tooltip="LinkedIn" tooltipPosition="top-center" children={<IconWrapper className="icon-linkedin">&#xf0e1;</IconWrapper>} />
                <IconButton tooltip="Github" tooltipPosition="top-center" children={<IconWrapper className="icon-github-circled">&#xf09b;</IconWrapper>} />
                <IconButton tooltip="Mail" tooltipPosition="top-center" children={<IconWrapper className="icon-mail-alt">&#xf0e0;</IconWrapper>} />
            </nav>
        </FooterWrapper>
    );
};

Footer.propTypes = {
    messages: PropTypes.object.isRequired,
};

export default Footer;