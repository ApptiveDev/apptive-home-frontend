import styled from '@emotion/styled';
import { colors } from '@/styles/colors';

type TextBoxProps = {
  children: React.ReactNode;
  mode: 'light' | 'dark';
};

const IntroText = styled.div<TextBoxProps>`
  display: flex;
  padding: 60px 45px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 36px;
  border: 4px solid ${({ mode }) => colors[mode].primary.darken};
  background: ${({ mode }) => colors[mode].background.darken};
  color: ${({ mode }) => colors[mode].text.prominent};
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
`;

export default IntroText;
