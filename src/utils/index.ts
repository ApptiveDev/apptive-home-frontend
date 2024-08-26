import { css, SerializedStyles } from '@emotion/react';
import { breakPoints } from '@styles/breakpoints';
import { ResponsiveCSSObjects, ScreenSize } from '@/types/styles';

export function serializeResponsiveCss(sizes?: ResponsiveCSSObjects): SerializedStyles {
  if (! sizes) {
    return css``;
  }

  const ret: SerializedStyles[] = [];
  Object.entries(sizes).forEach(([sizeKey, cssObject ]) => {
    const key = sizeKey as ScreenSize;
    const style = css`
      @media (min-width: ${breakPoints[key]}) {
        ${css(cssObject)} 
      }
    `;
    ret.push(style);
  });

  return css(ret);
}

export function serializeResponsiveColumns(responsiveColumns?: { [key in ScreenSize]: number }): SerializedStyles {
  if (!responsiveColumns) {
    return css``;
  }

  const ret: SerializedStyles[] = [];
  Object.entries(responsiveColumns).forEach(([sizeKey, columns]) => {
    const key = sizeKey as ScreenSize;
    const style = css`
      @media (min-width: ${breakPoints[key]}) {
        grid-template-columns: ${columns};
      }
    `;
    ret.push(style);
  });

  return css(ret);
}
