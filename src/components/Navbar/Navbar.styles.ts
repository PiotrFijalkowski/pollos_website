'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${({ $scrolled }) => ($scrolled ? '#193454' : 'transparent')};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightSection = styled.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
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
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const CTAButton = styled(Link)`
  background-color: white;
  color: #193454;
  padding: 10px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const HamburgerButton = styled.button`
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
    background: white;
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
  background-color: #193454;
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
  color: white;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  
  &:hover {
    opacity: 0.8;
  }
`;
