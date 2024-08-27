import { css } from '@emotion/react';
import { Heading, TextBody } from '@components/atoms/text/TextFactory';
import { colors } from '@styles/colors';
import Container from '@components/atoms/container/Container';

interface ActivityCardProps {
  title: string;
  order: number;
  icon: string;
  paragraph: string;
}

function ActivityCard({ title, order, icon, paragraph }: ActivityCardProps) {
  const cardStyle = css`
    background-color: ${colors.light.background.main};
    border-radius: 32px;
  `;

  const orderStyle = css`
    font-weight: bold;
    color: #ff7f24;
    margin-right: 10px;
  `;

  return (
    <Container size="full-width" style={cardStyle}>
      <Container padding="48px 52px" gap="48px" justify="space-between">
        <Container direction="column" gap="16px">
          <Heading.Small>
            <span css={orderStyle}>{order < 10 ? `0${order}` : order}</span>
            {title}
          </Heading.Small>
          <TextBody.Small style={{
            lineHeight: '1.2rem',
          }}
          >
            {paragraph}
          </TextBody.Small>
        </Container>
        <Container size={{ width: '131px', height: '118px' }} justify="center" align="center">
          <img src={icon} alt="icon" />
        </Container>
      </Container>
    </Container>
  );
}

export default ActivityCard;
