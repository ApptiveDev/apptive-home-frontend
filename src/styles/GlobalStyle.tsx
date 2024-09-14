import { css, Global } from '@emotion/react';

import 'reset-css/reset.css';
import { colors } from '@styles/colors';

const baseStyle = css`
  ::selection {
    background-color: ${colors.light.primary.main}
  }
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
