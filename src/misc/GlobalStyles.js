import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

/* RGB */
$color1: rgba(127, 183, 190, 1);
$color2: rgba(211, 243, 238, 1);
$color3: rgba(218, 204, 62, 1);
$color4: rgba(188, 44, 26, 1);
$color5: rgba(125, 21, 56, 1);

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 20px;
    font-family: sans-serif;
    color: white;
    background: rgba(127, 183, 190, 1);
  }
`
