import { css, Global } from '@emotion/react';

import 'reset-css/reset.css';

const baseStyle = css`
  body {
    font-family: 'Pretendard Variable', sans-serif;
  }
`;

function GlobalStyle() {
  return (
    <Global styles={baseStyle} />
  );
}

export default GlobalStyle;
