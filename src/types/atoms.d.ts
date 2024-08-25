import { HTMLAttributes, ReactNode } from 'react';
import { breakPoints } from '@styles/breakpoints';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  weight?: FontWeight;
  responsiveSize?: { [key: BreakPointIndex]: string };
  defaultSize?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export type BreakPointIndex = typeof breakPoints[number];

export type FontWeight = number | 'medium' | 'bold' | 'regular' | 'lighter' | 'bolder';
