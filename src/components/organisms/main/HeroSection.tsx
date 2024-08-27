import backgroundImage from '@assets/images/hero-background.png';
import Container from '@components/atoms/container/Container';
import { Heading, TextBody } from '@components/atoms/text/TextFactory';
import Text from '@components/atoms/text/Text';
import { colors } from '@styles/colors';
import Button from '@components/atoms/button/Button';

function HeroSection() {
  return (
    <Container size={{ width: '100%', height: '800px' }} style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
    }}
      justify="center"
      align="center"
    >
      <Container size="full-width" maxWidth="1210px" justify="center">
        <Container direction="column" align="center">
          <Heading.XSmall color={colors.light.text.prominent}>부산대학교 대표 IT 프로젝트 동아리</Heading.XSmall>
          <HeroText />
          <Button theme="light-outlined"  style={{
            marginTop: '15px',
          }}>
            <TextBody.Large weight="bold">
              21기 모집 링크 바로가기
            </TextBody.Large>
          </Button>
        </Container>
      </Container>

    </Container>
  );
}

function HeroText() {
  return (
    <Text
      defaultSize="60px"
      weight="bold"
      responsiveSize={{
        sm: '100px',
      }}
    >
      APPTIVE
    </Text>
  );
}

export default HeroSection;
