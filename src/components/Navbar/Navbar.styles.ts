'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #0a0a0a; /* Always dark background */
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 10px rgba(0,0,0,0.5)' : 'none')};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightSection = styled.div`
  display: none;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white; /* Always white on dark navbar */
  font-weight: bold;
  font-size: 1.5rem;
  
  img {
    height: 40px;
    width: auto;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: white; /* Always white on dark navbar */
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CTAButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background === '#ffffff' ? '#1a1a1a' : '#000000'}; /* Always dark text on yellow button */
  padding: 10px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const HamburgerButton = styled.button<{ $color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;

  div {
    width: 30px;
    height: 3px;
    background: ${({ $color }) => $color || 'white'}; /* Custom color or white default */
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
`;

export const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  
  &:hover {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.accent};
  }
`;
