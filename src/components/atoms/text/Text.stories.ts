import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import { BREAKPOINT_MD } from '@styles/breakpoints';

const meta: Meta<typeof Text> = {
  component: Text,
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Heading: Story = {
  args: {
    as: 'h2',
    color: '',
    children: 'Heading 테스트 입니다.',
    defaultSize: '32px',
    responsiveSize: {
      [BREAKPOINT_MD]: '46px',
    },
    weight: 700,
  },
};
