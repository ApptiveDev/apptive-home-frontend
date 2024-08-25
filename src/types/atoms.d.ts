import { HTMLAttributes, ReactNode } from 'react';
import { breakPoints } from '@styles/breakpoints';
import { CSSObject } from '@emotion/react';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  weight?: FontWeight;
  responsiveSize?: { [key: typeof breakPoints[string]]: string };
  defaultSize?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export type FontWeight = number | 'medium' | 'bold' | 'regular' | 'lighter' | 'bolder';


interface ResponsiveCSSObjects {
  xs?: CSSObject;
  sm?: CSSObject;
  md?: CSSObject;
  lg?: CSSObject;
}
