import Container from "@/components/atoms/container/Container";
import Image from '@components/atoms/image/Image';
import headerLogo from '@assets/images/header-logo.svg';
import linkIcon from '@assets/images/link-icon.svg';
import { TextBody } from "@/components/atoms/text/TextFactory";

function Footer() {
    return (
        <Container size="full-width" justify="center" style={{backgroundColor: '#1B1B1B'}}>
            <Container
              size={{ width: '100%', height: '320px' }}
              justify="space-between"
              align="center"
              maxWidth="1210px"
              padding="0 200px">
                <Container gap="12px" direction="column" >
                    <Image src={headerLogo} alt="header logo" />
                    <TextBody.Medium weight="bold"color="white">APPTIVE</TextBody.Medium>
                    
                    <TextBody.Medium weight="bold"color="white">부산대학교 대표 IT 프로젝트 동아리</TextBody.Medium>
                </Container>
                <Container gap="12px" direction="column" >
                    <a rel="stylesheet" href="" style={{textDecoration:'underline', color:'white'}}>
                        <Container gap="5px">
                            Notion
                        <Image src={linkIcon} alt="link icon" />
                        </Container>
                        
                    </a>
                    <a rel="stylesheet" href="" style={{textDecoration:'underline', color:'white'}}>
                        <Container gap="5px">
                            Discord
                        <Image src={linkIcon} alt="link icon" />
                        </Container>
                        
                    </a>
                    <a rel="stylesheet" href="" style={{textDecoration:'underline', color:'white'}}>
                        <Container gap="5px">
                            Instagram
                        <Image src={linkIcon} alt="link icon" />
                        </Container>
                        
                    </a>
                </Container>
               
              </Container>
            
          </Container>
    )
}

export default Footer;