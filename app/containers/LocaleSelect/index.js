/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import CountryFlags from '../../common/countryFlags';

import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../../actions';

const FlagImage = styled.img`
  width: 24px;
  height: 24px;
`;

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (

            <IconMenu
                iconButtonElement={
                    <IconButton>
                        <FlagImage src={CountryFlags[this.props.locale]} alt="language" />
                    </IconButton>}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                onItemTouchTap={this.props.onLocaleToggle}
                >
                {
                    appLocales.map((value) =>
                        <MenuItem
                            key={value}
                            value={value}
                            primaryText={<FormattedMessage {...messages[value]} />}
                            leftIcon={<FlagImage src={CountryFlags[value]} alt={value} />}
                            />
                    )
                }
            </IconMenu>

            // <Wrapper>
            //     <Toggle value={this.props.locale} values={appLocales} messages={messages} onToggle={this.props.onLocaleToggle} />
            // </Wrapper>
        );
    }
}

LocaleToggle.propTypes = {
    onLocaleToggle: React.PropTypes.func,
    locale: React.PropTypes.string,
};

const mapStateToProps = (state) => ({
  locale: state.language,
});

export function mapDispatchToProps(dispatch) {
    return {
        onLocaleToggle: (event, child) => dispatch(changeLocale(child.props.value)),
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
