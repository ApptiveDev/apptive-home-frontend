import Container from '@components/atoms/container/Container';
import { MAX_CONTENT_WIDTH } from '@styles/sizes';
import { Heading } from '@components/atoms/text/TextFactory';
import { colors } from '@styles/colors';
import { ReactNode } from 'react';
import ActivityCardSection
  from '@components/organisms/main/activity/ActivityCardSection';

function ActivitySection() {
  return (
    <Container size="full-width" justify="center" style={{
      backgroundColor: colors.light.background.darken,
    }}
    >
      <ActivityContainer>
        <Container size="full-width" justify="flex-end">
          <Heading.XLarge>Activity of APPTIVE</Heading.XLarge>
        </Container>
        <Container size="full-width" padding="40px 0">
          <ActivityCardSection />
        </Container>
      </ActivityContainer>
    </Container>
  );
}

function ActivityContainer({ children }: ActivityContainerProps) {
  return (
    <Container
      size="full-width"
      maxWidth={MAX_CONTENT_WIDTH}
      direction="column"
      padding="20px"
      style={{
        padding: '50px 20px',
      }}
      responsiveStyle={{
        lg: { padding: '100px 20px' },
      }}
    >
      {children}
    </Container>
  );
}

interface ActivityContainerProps {
  children?: ReactNode;
}

export default ActivitySection;
