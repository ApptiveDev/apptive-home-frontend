import { Heading } from '@/components/atoms/text/TextFactory';
import IntroText from '@/components/molecules/IntroText';
import {
  YearText,
  ExplainText,
  SliderWrapper,
  SliderContainer,
  YearTextBox,
} from '@/components/molecules/YearText';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { breakPoints } from '@/styles/breakpoints';
import boyIntro from '@assets/images/main/boyIntro.png';
import girlIntro from '@assets/images/main/girlIntro.png';

interface MainSectionProps {
  mode: 'light' | 'dark';
}

const MainSection = ({ mode }: MainSectionProps) => {
  const colorScheme = colors[mode];

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${colorScheme.background.main};
    padding: 0 35px;
  `;
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 1000px;
    width: 100%;
  `;
  const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: ${breakPoints.md}) {
      flex-direction: column;
      gap: 30px;
      text-align: center;
    }
  `;
  const TextBox = styled.div`
    margin-top: 200px;
    margin-bottom: 50px;
    display: flex;
    max-width: 1000px;
    width: 100%;
    text-align: left;
  `;
  const Image = styled.img`
    width: 250px;
    height: 250px;

    @media (max-width: ${breakPoints.sm}) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: ${breakPoints.xs}) {
      width: 150px;
      height: 150px;
    }
  `;

  const SectionReversed = styled(Section)`
  @media (max-width: ${breakPoints.md}) {
     flex-direction: column-reverse;
  }
`;


  return (
    <Wrapper>
      <TextBox>
        <Heading.XLarge color={colorScheme.text.prominent}>
          What is Apptive?
        </Heading.XLarge>
      </TextBox>
      <Container>
        <Section>
          <Image src={boyIntro} alt="boyIntro" />
          <IntroText mode={mode}>
            2013년에 개설된 APPTIVE는 학과 및 학년 제한없이 서비스 제작과 창업에
            관심있는 분들과 함께합니다. 기획자, 개발자, 디자이너로 구성된 팀으로
            활동하며 팀 단위 서비스 개발, 창업 프로젝트와 부서별 스터디를 통해
            전체 실력 향상을 목표로 합니다.
          </IntroText>
        </Section>
        <SectionReversed>
          <IntroText mode={mode}>
            동아리 활동은 1년을 주기로 하며, 활동 이후 명예회원으로 전환하고
            동문회에 속하게 됩니다. 이후에도 현직자 네트워킹, 연합동아리 활동,
            테크 세미나 참석 등 자유로운 동아리 활동이 가능합니다.
          </IntroText>
          <Image src={girlIntro} alt="girlIntro" />
        </SectionReversed>
      </Container>
      <TextBox>
        <Heading.XLarge color={colorScheme.text.prominent}>
          Years of Apptive
        </Heading.XLarge>
      </TextBox>
      <SliderWrapper mode={mode}>
        <SliderContainer>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2023</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>제 2회 impact campus 비수도권 IT 동아리 선정</li>
                <li>2023년 상반기 부산대 창업중심대학 창업동아리 선정 3팀</li>
                <li>제 4회 링글 서비스 기획 공모전 본선 진출</li>
                <li>제 11회 K-해커톤 우수상 수상</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2022</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>제 10회 K-HACKATHON 대회 선발 (2팀)</li>
                <li>제 3회 Path-hack 대상 수상</li>
                <li>예비 창업자 패키지 지원 사업 선정</li>
                <li>제 3회 부산시 대학(원)생 아이디어 공모전 우수상 수상</li>
                <li>부산대학교 창업동아리 선정</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2021</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>ICT/SW 여성 창업공모전 금상 수상</li>
                <li>부산대학교 IDEA ARENA 창업경진대회 대상 수상</li>
                <li>제 9회 K-HACKATHON 대회 최우수상 수상</li>
                <li>부산대학교 해커톤 장려상 수상</li>
                <li>창업스타경진대회 본선 진출</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2020</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>SW 챌린지 공모전(한국SW산업협회장상)</li>
                <li>제 2회 부산대학교 창의융합 SW 해커톤 선발 (5팀)</li>
                <li>PNU 창업동아리 발굴 육성사업 1차 선발 (5팀)</li>
                <li>제8회 정주영 창업경진대회 2차 면접심사 진출</li>
                <li>Beehive SW 창업분야 지원사업 선정</li>
                <li>PSS(PNU SW Start-Up) 창업 지원 사업 선정 (4팀)</li>
                <li>2019 PNU 초기창업패키지 지원사업 선정</li>
                <li>2019 학생 창업유망팀 300 선발 (2팀)</li>
                <li>2019 마케팅을 통한 Start-up, Step-up 성과발표회 우수상</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2019</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>
                  제 2회 부산대학교 창의융합 SW 해커톤 수상 4팀 (최우수, 우수상,
                  장려상 2팀)
                </li>
                <li>도전 K-스타트업 2019 본선진출</li>
                <li>2019 PNU Idea Arena 대상</li>
                <li>2019년 서비스R&D 대학(원)생 아이디어 공모전 우수상</li>
                <li>
                  2019 유니버셜디자인 & 보조기기 아이디어 공모전 대상(현대자동차
                  대표이사상)
                </li>
                <li>2019 스마트시티 서비스 개발 경진대회 대상</li>
                <li>제 2회 PNU-JBNU Dream-hi 창업캠프 우수상</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2018</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>PNU 창업동아리 발굴 육성사업 최종 선발 (2팀)</li>
                <li>1학기 활동기수 단기 프로젝트 플레이스토어 출시(4팀)</li>
                <li>
                  제 1회 창의융합소프트웨어 해커톤 대회 최우수상(1팀),
                  장려상(1팀)
                </li>
                <li>인터랙티브미디어 영상공모전 3등</li>
                <li>
                  제1회 스타트업과 함께하는 메이커톤 3위(페이보리,
                  부산대SW중심대학)
                </li>
                <li>2018 스타트업 스파르탄 레이스 대상(부산정보산업진흥원)</li>
                <li>2018 부산 청년 일자리 해커톤 우수상(부경대학교총장상)</li>
                <li>아이디어 특허 출원 진행 중(1팀)</li>
                <li>
                  창업기업(파킹브라더, 주식회사모두싸인, 한그루 스튜디오)
                  견학(총 4회)
                </li>
                <li>취창업컨설팅, 오픈캠퍼스 주최(총 3회)</li>
                <li>피칭 서바이벌 K-스타트업 본선 진출(머니투데이방송)</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2017</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>PNU 창업동아리 발굴육성사업 장려상</li>
                <li>Bu:Star 챌린지 게임 공모전 대상</li>
                <li>전국 대학생 ICT융합 창업경진대회 우수상</li>
                <li>DA-데모크라우드펀딩 경진대회 본선 진출(1팀)</li>
                <li>PNU 창업동아리 발굴 육성사업 선발 (5팀)</li>
                <li>스타트업 전문 언론사 Platum에 소개</li>
                <li>
                  청년창조발전소 '창업라운지 : First Step'프로그램 선정(2팀)
                </li>
                <li>스마일게이트 맴버쉽 선정 (1팀)</li>
                <li>창업유망팀 300 선정(1팀)</li>
                <li>부산 경제진흥원 대학 창업동아리 지원사업 선정 (2팀)</li>
                <li>부산광역시 창업지원사업 제 8기 선정 (1팀)</li>
                <li>PNU Mashup Zone 2기 선정 (1팀)</li>
                <li>
                  PNU 창업동아리 발굴 육성사업 최종 10개팀 중 최우수상 (1팀)
                </li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2016</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>제1회 창의프로젝트 경진대회 우수상, 장려상 수상(2팀)</li>
                <li>부산 문화 콘텐츠랩 동아리분야 본선 진출(2팀)</li>
                <li>부산대 창업동아리 장려상 수상</li>
                <li>PIBA 2016 기술 사업화 경진대회 우수상</li>
                <li>부산권 지역선도 제1회 창의 프로젝트 우수상</li>
                <li>부산권 지역선도 제2회 창의 프로젝트 장려상</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2015</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>부산산업진흥원 갈매기 창업사관학교 2팀 9명 수료</li>
                <li>정주영 창업경진대회 서포터즈 동아리 선정</li>
                <li>부산대학교 우수창업동아리 장려상 수상</li>
                <li>창업라운지 : First Step'프로그램 선정(2팀)</li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2014</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>동남권 창업경진대회 최우수상</li>
                <li>부산대학교 우수창업동아리 최우수상 수상</li>
                <li>부산대학교 산학협력단 창업동아리 선정 및 지원</li>
                <li>부산대학교 산학협력단 최종창업아이템 선정</li>
                <li>대경동남권 창업지락 창의우수상</li>
                <li>산학 EXPO 멘토 선정 우수 전시팀 선정</li>
                <li>단디벤처포럼 기업IR발표(intolaw아이템)</li>
                <li>부산대학교 idea strat-up 경진대회 금상</li>
                <li>전국 천하제일 창업동아리 경진대회 한국콘텐츠진흥원장상</li>
                <li>
                  부산정보산업진흥원 갈매기 창업사관학교 동아리내 2팀 선정
                </li>
              </ul>
            </ExplainText>
          </YearTextBox>
          <YearTextBox mode={mode}>
            <YearText mode={mode}>2013</YearText>
            <ExplainText mode={mode}>
              <ul>
                <li>부산대 어플 개발 동아리 앱티브 개설</li>
                <li>부산대학교 산학협력단 창업동아리 2팀 선정 및 지원</li>
              </ul>
            </ExplainText>
          </YearTextBox>
        </SliderContainer>
      </SliderWrapper>
    </Wrapper>
  );
};

export default MainSection;
