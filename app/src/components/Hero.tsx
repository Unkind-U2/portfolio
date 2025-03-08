// src/components/Hero.tsx
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const StyledSection = styled.section`
  margin-bottom: 40px; /* セクション間のスペース */
  padding: 20px; /* パディング */
  background-color: #f9f9f9; /* 背景色 */
  border: 1px solid #ddd; /* ボーダー */
  border-radius: 10px; /* 角丸 */
`;

const Hero = ({ children }: Props) => {
  return (
    <StyledSection> {/* StyledSectionを使用する */}
      {children}
    </StyledSection>
  );
};

export default Hero; // ここでexportしています
