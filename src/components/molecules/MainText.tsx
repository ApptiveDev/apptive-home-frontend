import styled from '@emotion/styled';

type TextBoxProps = {
  children: React.ReactNode;
};

const MainText = styled.div<TextBoxProps>`
  display: flex;
  padding: 60px 45px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 36px;
  border: 4px solid var(--primary-darken, #FF861A);
  background: #1B1B1B;
  color: var(--absolute-white, #FFF);
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
`;

export default MainText;
