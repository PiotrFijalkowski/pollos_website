'use client';

import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 100px 24px;
  position: relative;
  overflow: hidden;

  /* Grid Background Pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(${({ theme }) => theme.colors.grid} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.grid} 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  animation: ${fadeIn} 0.6s ease-out forwards;
`;

export const Header = styled.div`
  text-align: left;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 450px;
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grid};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent}; /* Yellow accent */
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ContactLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
`;

export const ContactValue = styled.a`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FormColumn = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 40px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 0.6s ease-out 0.2s forwards;
  opacity: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.2s ease;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.2s ease;
  width: 100%;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background === '#ffffff' ? '#1a1a1a' : '#000000'};
  border: none;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;
  margin-top: 16px;
  align-self: flex-start;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;
