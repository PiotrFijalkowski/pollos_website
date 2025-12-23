import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const TextColumn = styled.div`
  @media (max-width: 992px) {
    text-align: center;
    order: 1;
  }
`;

export const MapColumn = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    order: 2;
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 32px;
  max-width: 500px;

  @media (max-width: 992px) {
    margin: 0 auto 32px;
  }
`;

export const TooltipBox = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 250px;
`;

export const TooltipTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TooltipText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.4;
`;
