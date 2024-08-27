import { Heading } from '@/components/atoms/text/TextFactory';
import MainText from '@/components/molecules/MainText';
import styled from '@emotion/styled';

const MainSection = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 70px;
    background: black;
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 65px;
    max-width: 1000px;
  `;
  const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;
  const Image = styled.img`
    width: 300px;
    height: 300px;
`;


  return (
    <Wrapper>
      <Heading.XLarge color="white" align-self="flex-start">What is Apptive?</Heading.XLarge>
      <Container>
        <Section>
            <Image src='src/assets/images/main/boyIntro.png' alt='boyIntro'/>
            <MainText>2013년에 개설된 APPTIVE는 학과 및 학년 제한없이 서비스 제작과 창업에 관심있는 분들과 함께합니다. 기획자, 개발자, 디자이너로 구성된 팀으로 활동하며 팀 단위 서비스 개발, 창업 프로젝트와 부서별 스터디를 통해 전체 실력 향상을 목표로 합니다.</MainText>
        </Section>
        <Section>
            <MainText>동아리 활동은 1년을 주기로 하며, 활동 이후 명예회원으로 전환하고 동문회에 속하게 됩니다. 이후에도 현직자 네트워킹, 연합동아리 활동, 테크 세미나 참석 등 자유로운 동아리 활동이 가능합니다.</MainText>
            <Image src='src/assets/images/main/girlIntro.png' alt='girlIntro'/>
        </Section>
      </Container>
      
    </Wrapper>
        
  );
};

export default MainSection;