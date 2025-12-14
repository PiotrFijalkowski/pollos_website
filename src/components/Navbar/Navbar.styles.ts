'use client';

import styled from 'styled-components';
import Link from 'next/link';

export const NavContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${({ $scrolled, theme }) =>
    $scrolled ? theme.colors.navBackground : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.colors.border}` : 'none'};
`;

export const NavContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const DesktopThemeToggle = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

export const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 32px;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.navText};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: ${({ theme }) => theme.colors.surface};
  min-width: 220px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${NavItem}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

export const DropdownLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grid};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CTAButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.accent};
  color: #1a1a1a;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: transform 0.2s ease;
  display: none;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const HamburgerButton = styled.button<{ $color?: string }>`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1002;

  div {
    width: 32px;
    height: 3px;
    background: ${({ $color, theme }) => $color || theme.colors.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface MobileMenuOverlayProps {
  $isOpen: boolean;
}

export const MobileMenuOverlay = styled.div<MobileMenuOverlayProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

export const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
