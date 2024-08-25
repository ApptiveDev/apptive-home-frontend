import { TextProps } from '@/types/atoms';
import Text from '@components/atoms/text/Text';
import { BREAKPOINT_MD } from '@styles/breakpoints';

export function createTextComponent(props: Partial<TextProps>) {
  return function TextComponent(extraProps: TextProps) {
    return (
      <Text {...props} {...extraProps} />
    );
  };
}

export const TextBody = {
  Large: createTextComponent({
    defaultSize: '15px',
    responsiveSize: {
      [BREAKPOINT_MD]: '22px',
    },
    as: 'p',
  }),
  Medium: createTextComponent({
    defaultSize: '13px',
    responsiveSize: {
      [BREAKPOINT_MD]: '18px',
    },
    as: 'p',
  }),
  Small: createTextComponent({
    defaultSize: '11px',
    responsiveSize: {
      [BREAKPOINT_MD]: '16px',
    },
    as: 'p',
  }),
};

export const Heading = {
  XLarge: createTextComponent({
    defaultSize: '32px',
    responsiveSize: {
      [BREAKPOINT_MD]: '46px',
    },
    as: 'h1',
    weight: 'bold',
  }),
  Large: createTextComponent({
    defaultSize: '28px',
    responsiveSize: {
      [BREAKPOINT_MD]: '40px',
    },
    as: 'h2',
    weight: 'bold',
  }),
  Medium: createTextComponent({
    defaultSize: '24px',
    responsiveSize: {
      [BREAKPOINT_MD]: '34px',
    },
    as: 'h3',
    weight: 'bold',
  }),
  Small: createTextComponent({
    defaultSize: '20px',
    responsiveSize: {
      [BREAKPOINT_MD]: '28px',
    },
    as: 'h4',
    weight: 'bold',
  }),
  XSmall: createTextComponent({
    defaultSize: '18px',
    responsiveSize: {
      [BREAKPOINT_MD]: '26px',
    },
    as: 'h5',
    weight: 'bold',
  }),
};

export const Paragraph = {
  Large: createTextComponent({
    defaultSize: '18px',
    responsiveSize: {
      [BREAKPOINT_MD]: '30px',
    },
    as: 'p',
  }),
  Medium: createTextComponent({
    defaultSize: '16px',
    responsiveSize: {
      [BREAKPOINT_MD]: '26px',
    },
    as: 'p',
  }),
  Small: createTextComponent({
    defaultSize: '14px',
    responsiveSize: {
      [BREAKPOINT_MD]: '24px',
    },
    as: 'p',
  }),
};
