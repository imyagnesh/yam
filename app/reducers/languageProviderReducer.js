/*
 *
 * LanguageProvider reducer
 *
 */

import {
  CHANGE_LOCALE, 
  DEFAULT_LOCALE
} from './../constants';


function languageProviderReducer(state = DEFAULT_LOCALE, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return action.locale;
    default:
      return state;
  }
}

export default languageProviderReducer;
