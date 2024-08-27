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
      <Container size="full-width" align="center" direction="column"  maxWidth={MAX_CONTENT_WIDTH}>
        <ActivityContainer>
          <Container size="full-width" justify="flex-end">
            <Heading.XLarge>Activity of APPTIVE</Heading.XLarge>
          </Container>
        </ActivityContainer>
        <ActivityCardSection />
      </Container>
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
        padding: '30px 20px',
      }}
      responsiveStyle={{
        sm: { padding: '50px 20px' },
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
