import { ReactNode } from 'react';
import { css, CSSObject } from '@emotion/react';
import { ResponsiveCSSObjects } from '@/types/styles';
import { serializeResponsiveCss } from '@/utils';

interface ContainerProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  gap?: number | string;
  style?: CSSObject;
  responsiveStyle?: ResponsiveCSSObjects;
}

function Container({
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  gap = 0,
  style,
  responsiveStyle,
}: ContainerProps) {
  const containerStyle: CSSObject = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap,
    ...style,
  };

  return (
    <div css={[css(containerStyle), serializeResponsiveCss(responsiveStyle)]}>{children}</div>
  );
}

export default Container;
