import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    color: #2E2D24;
    background: #fff;
}`;

export const Logo = styled.img`
  width: 200px;
`;
