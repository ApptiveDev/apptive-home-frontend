import { TextProps } from '@/types/props';
import Text from '@components/atoms/text/Text';

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
      md: '22px',
    },
    as: 'p',
  }),
  Medium: createTextComponent({
    defaultSize: '13px',
    responsiveSize: {
      md: '18px',
    },
    as: 'p',
  }),
  Small: createTextComponent({
    defaultSize: '11px',
    responsiveSize: {
      md: '16px',
    },
    as: 'p',
  }),
};

export const Heading = {
  XLarge: createTextComponent({
    defaultSize: '32px',
    responsiveSize: {
      md: '46px',
    },
    as: 'h1',
    weight: 'bold',
  }),
  Large: createTextComponent({
    defaultSize: '28px',
    responsiveSize: {
      md: '40px',
    },
    as: 'h2',
    weight: 'bold',
  }),
  Medium: createTextComponent({
    defaultSize: '24px',
    responsiveSize: {
      md: '34px',
    },
    as: 'h3',
    weight: 'bold',
  }),
  Small: createTextComponent({
    defaultSize: '20px',
    responsiveSize: {
      md: '28px',
    },
    as: 'h4',
    weight: 'bold',
  }),
  XSmall: createTextComponent({
    defaultSize: '18px',
    responsiveSize: {
      md: '26px',
    },
    as: 'h5',
    weight: 'bold',
  }),
};

export const Paragraph = {
  Large: createTextComponent({
    defaultSize: '18px',
    responsiveSize: {
      md: '30px',
    },
    as: 'p',
  }),
  Medium: createTextComponent({
    defaultSize: '16px',
    responsiveSize: {
      md: '26px',
    },
    as: 'p',
  }),
  Small: createTextComponent({
    defaultSize: '14px',
    responsiveSize: {
      md: '24px',
    },
    as: 'p',
  }),
};
