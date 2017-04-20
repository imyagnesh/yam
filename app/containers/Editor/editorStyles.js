import styled from 'styled-components';

export const Root = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: text;
  padding: 16px;
  border-radius: 2px;
  margin-bottom: 2em;
  box-shadow: inset 0px 1px 8px -3px #ABABAB;
  background: #fefefe;
  & .public-DraftEditor-content {
      margin: 0 -15px -15px;
      padding: 15px;
      min-height: 100px;
  };
`;
