import styled from '@emotion/styled';
import { colors } from '@/styles/colors';

interface ModeProps {
  mode: 'light' | 'dark';
}

const YearText = styled.div<ModeProps>`
  color: ${({ mode }) => colors[mode].primary.darken};
  font-size: 100px;
  font-weight: 1000;
  position: absolute;
  top: -15px;
  left: -5px;
`;

const SliderWrapper = styled.div<ModeProps>`
  display: flex;
  padding-left: 45px;
  padding-right: 45px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px;
  overflow: hidden;
  background-color: ${({ mode }) => colors[mode].background.main};
`;

const SliderContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-left: 45px;
  gap: 15px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const YearTextBox = styled.div<ModeProps>`
  position: relative;
  flex: 0 0 auto;
  width: 390px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 4px solid ${({ mode }) => colors[mode].primary.darken};
  background: ${({ mode }) => colors[mode].background.darken};
  scroll-snap-align: start;
  padding-top: 100px;
`;

const ExplainText = styled.div<ModeProps>`
  ul {
    font-size: 15px;
    list-style-type: disc;
    padding-left: 25px;
    padding-right: 10px;
    line-height: 35px;
    color: ${({ mode }) => colors[mode].text.prominent};
  }
`;

export { YearText, ExplainText, SliderWrapper, SliderContainer, YearTextBox };
