import Container from '@components/atoms/container/Container';
import Image from '@components/atoms/image/Image';
import headerLogo from '@assets/images/header-logo.svg';
import { TextBody } from '@components/atoms/text/TextFactory';

function Header() {
  return (
    <Container size="full-width" justify="center" style={{
      position: 'fixed',
    }}
    >
      <Container
        size={{ width: '100%', height: '95px' }}
        justify="space-between"
        align="center"
        maxWidth="1210px"
        padding="0 20px"
      >
        <Image src={headerLogo} alt="header logo" />
        <Container gap="49px">
          <TextBody.Medium weight="bold">About APPTIVE</TextBody.Medium>
          <TextBody.Medium weight="bold">Activity</TextBody.Medium>
          <TextBody.Medium weight="bold">Gallery</TextBody.Medium>
        </Container>
      </Container>

    </Container>
  );
}

export default Header;
