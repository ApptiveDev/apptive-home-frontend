import { css, SerializedStyles } from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';
import { ResponsiveCSSObjects } from '@/types/atoms';

export function serializeResponsiveCss(sizes?: ResponsiveCSSObjects): SerializedStyles {
  if (! sizes) {
    return css``;
  }

  const ret: SerializedStyles[] = [];
  Object.entries(sizes).forEach(([sizeKey, cssObject ]) => {
    const key = sizeKey as keyof typeof breakPoints;
    const style = css`
      @media (min-width: ${breakPoints[key]}) {
        ${css(cssObject)} 
      }
    `;
    ret.push(style);
  });

  return css(ret);
}
