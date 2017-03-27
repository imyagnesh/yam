import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

const RedirectButtonWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  align-content: center;
  max-width: 100%;
  justify-content: center;
`;

const redirectButton = ({ label, path }) => {
  const changePath = (value) => {
    browserHistory.push(value);
  };
  return (
    <RedirectButtonWrapper>
      <RaisedButton label={label} secondary onTouchTap={() => { changePath(path); }} />
    </RedirectButtonWrapper>
  );
};

redirectButton.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default redirectButton;
