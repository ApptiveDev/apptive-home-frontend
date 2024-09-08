import Container from '@components/atoms/container/Container';
import headerLogo from '@assets/images/header-logo.svg';
import headerSmallLogo from '/logo.svg';
import { TextBody } from '@components/atoms/text/TextFactory';
import { css } from '@emotion/react';
import { BREAKPOINT_SM } from '@styles/breakpoints';
import useHeaderScrollEffect from '@/hooks/useHeaderScrollEffect';

function Header() {
  const { headerStyle: scrollHeaderStyle } = useHeaderScrollEffect();
  const baseStyle = css`
    position: fixed;
    transition: all 0.15s ease-in;
    z-index: 1000;
  `;

  return (
    <Container
      size="full-width"
      justify="center"
      style={css(baseStyle, scrollHeaderStyle)}
    >
      <Container
        size={{ width: '100%', height: '80px' }}
        justify="space-between"
        align="center"
        maxWidth="1210px"
        padding="0 20px"
      >
        <ResponsiveLogo />
        <Container gap="20px" responsiveStyle={{
          sm: {
            gap: '49px',
          },
        }}
        >
          <TextBody.Medium weight="bold">About</TextBody.Medium>
          <TextBody.Medium weight="bold">Activity</TextBody.Medium>
          <TextBody.Medium weight="bold">Gallery</TextBody.Medium>
        </Container>
      </Container>

    </Container>
  );
}

const ResponsiveLogo = () => (
  <Container style={css`
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${headerSmallLogo});
    @media (min-width: ${BREAKPOINT_SM}) {
      width: 160px;
      background-image: url(${headerLogo});
    }
  `}
  />
);

export default Header;
