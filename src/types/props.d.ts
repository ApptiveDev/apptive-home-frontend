import { HTMLAttributes, ReactNode } from 'react';
import { FontWeight } from '@/types/styles';
import { ScreenSize } from '@/types/styles';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  weight?: FontWeight;
  responsiveSize?: { [key: ScreenSize]: string };
  defaultSize?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}
