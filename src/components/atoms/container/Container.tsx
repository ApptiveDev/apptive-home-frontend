import { ReactNode } from 'react';
import { css, CSSObject } from '@emotion/react';
import { ResponsiveCSSObjects } from '@/types/styles';
import { serializeResponsiveCss } from '@/utils';

interface ContainerProps {
  children?: ReactNode;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  size?: ContainerSize;
  gap?: number | string;
  style?: CSSObject;
  responsiveStyle?: ResponsiveCSSObjects;
}

function Container({
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'flex-start',
  size,
  gap = 0,
  style,
  responsiveStyle,
}: ContainerProps) {
  const fixedSize = getFixedSize(size);
  const containerStyle: CSSObject = {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    width: fixedSize.width,
    height: fixedSize.height,
    gap,
    ...style,
  };

  return (
    <div css={[css(containerStyle), serializeResponsiveCss(responsiveStyle)]}>{children}</div>
  );
}

function getFixedSize(size?: ContainerSize) {
  if (! size) {
    return {
      width: 'auto',
      height: 'auto',
    };
  }
  if (size === 'match-parent') {
    return {
      width: '100%',
      height: '100%',
    };
  }
  if (size === 'full-width') {
    return {
      width: '100%',
      height: 'auto',
    };
  }
  return size;
}

type ContainerSize = 'match-parent' | 'full-width' | { width: string, height: string };

export default Container;
