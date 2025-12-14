'use client';

import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import {
  NavContainer,
  NavContent,
  LogoContainer,
  RightSection,
  DesktopThemeToggle,
  DesktopMenu,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownLink,
  CTAButton,
  HamburgerButton,
  MobileMenuOverlay,
  MobileNavLink,
} from './Navbar.styles';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLogoSrc = () => {
    if (!theme?.colors?.background) return '/assets/logo_b.png'; // Default
    return theme.colors.background === '#0a0a0a' ? '/assets/logo_w.png' : '/assets/logo_b.png';
  };

  return (
    <>
      <NavContainer $scrolled={scrolled}>
        <NavContent>
          <LogoContainer href="/">
            <Image
              src={getLogoSrc()}
              alt="Pollos Logo"
              width={180}
              height={60}
              style={{ width: 'auto', height: '60px' }}
              priority
            />
          </LogoContainer>

          <RightSection>
            <DesktopMenu>
              <NavItem>
                <NavLink href="/uslugi">Usługi</NavLink>
                <DropdownMenu>
                  <DropdownLink href="/uslugi/social-media">Social Media</DropdownLink>
                  <DropdownLink href="/uslugi/kampanie-reklamowe">Kampanie Reklamowe</DropdownLink>
                  <DropdownLink href="/uslugi/zdjecia-i-filmy">Zdjęcia i Filmy</DropdownLink>
                  <DropdownLink href="/uslugi/strony-internetowe">Strony WWW</DropdownLink>
                  <DropdownLink href="/uslugi/pakiety">Pakiety</DropdownLink>
                </DropdownMenu>
              </NavItem>
              <NavLink href="/realizacje">Realizacje</NavLink>
              <NavLink href="/dla-kogo">Dla kogo</NavLink>
              <NavLink href="/wiedza">Wiedza</NavLink>
              <NavLink href="/o-firmie">O Firmie</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/kontakt">Kontakt</NavLink>
            </DesktopMenu>
            <DesktopThemeToggle>
              <ThemeToggle color={scrolled || isOpen ? theme?.colors?.text : theme?.colors?.navText} />
            </DesktopThemeToggle>
            <CTAButton href="/kontakt">Darmowa Konsultacja</CTAButton>
          </RightSection>

          <HamburgerButton
            onClick={toggleMenu}
            aria-label="Menu"
            $color={scrolled ? theme?.colors?.text : theme?.colors?.navText}
          >
            <div style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
            <div style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? 'translateX(20px)' : 'translateX(0)' }} />
            <div style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
          </HamburgerButton>
        </NavContent>
      </NavContainer>

      <MobileMenuOverlay $isOpen={isOpen}>
        <HamburgerButton
          onClick={toggleMenu}
          style={{ position: 'absolute', top: '28px', right: '24px' }}
          aria-label="Close Menu"
          $color={theme?.colors?.text}
        >
          <div style={{ transform: 'rotate(45deg)' }} />
          <div style={{ opacity: 0 }} />
          <div style={{ transform: 'rotate(-45deg)' }} />
        </HamburgerButton>

        <MobileNavLink href="/uslugi" onClick={toggleMenu}>Usługi</MobileNavLink>
        <MobileNavLink href="/realizacje" onClick={toggleMenu}>Realizacje</MobileNavLink>
        <MobileNavLink href="/dla-kogo" onClick={toggleMenu}>Dla kogo</MobileNavLink>
        <MobileNavLink href="/wiedza" onClick={toggleMenu}>Wiedza</MobileNavLink>
        <MobileNavLink href="/o-firmie" onClick={toggleMenu}>O Firmie</MobileNavLink>
        <MobileNavLink href="/faq" onClick={toggleMenu}>FAQ</MobileNavLink>
        <MobileNavLink href="/kontakt" onClick={toggleMenu}>Kontakt</MobileNavLink>

        <div style={{ margin: '20px 0' }}>
          <ThemeToggle />
        </div>

        <CTAButton href="/kontakt" onClick={toggleMenu} style={{ display: 'inline-block' }}>Darmowa Konsultacja</CTAButton>
      </MobileMenuOverlay>
    </>
  );
};

export default Navbar;
