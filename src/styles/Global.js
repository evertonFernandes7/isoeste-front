import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    color: ${colors.descriptionColor};
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    min-height: calc(100vh - 50px);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
`;
