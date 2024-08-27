import { Meta, StoryObj } from '@storybook/react';
import Container from '@components/atoms/container/Container';
import Grid from '@components/atoms/grid/Grid';

const meta: Meta<typeof Container> = {
  component: Container,
};
export default meta;

type Story = StoryObj<typeof Container>;

const GridContent = () => (
  <Grid columns={3} gap={16} responsiveColumns={{
    md: 6,
  }}
  >
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
    <div style={{ background: '#e0e0e0', padding: '20px' }}>Grid Item</div>
  </Grid>
);

export const DefaultLayout: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 20,
    style: {
      border: '1px solid #ccc',
      padding: '20px',
      minHeight: '400px',
    },
    children: <GridContent />,
  },
};

export const RowLayout: Story = {
  args: {
    direction: 'row',
    justify: 'space-between',
    align: 'center',
    gap: 20,
    style: {
      border: '1px solid #ccc',
      padding: '20px',
      minHeight: '400px',
    },
    children: <GridContent />,
  },
};

export const ResponsiveLayout: Story = {
  args: {
    direction: 'column',
    justify: 'center',
    align: 'center',
    gap: 20,
    style: {
      border: '1px solid #ccc',
      padding: '20px',
      minHeight: '400px',
    },
    responsiveStyle: {
      sm: { padding: '10px' },
      md: { padding: '20px' },
      lg: { padding: '30px' },
    },
    children: <GridContent />,
  },
};
