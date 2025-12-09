'use client';

import Image from 'next/image';

import React, { useState, useEffect } from 'react';
import {
  NavContainer,
  NavContent,
  LogoContainer,
  RightSection,
  DesktopMenu,
  NavLink,
  CTAButton,
  HamburgerButton,
  MobileMenuOverlay,
  MobileNavLink,
} from './Navbar.styles';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <NavContainer $scrolled={scrolled}>
        <NavContent>
          <LogoContainer href="/">
            <Image
              src="/assets/logo.png"
              alt="Pollos Logo"
              width={120}
              height={40}
              style={{ width: 'auto', height: '40px' }}
              priority
            />
          </LogoContainer>

          <RightSection>
            <DesktopMenu>
              <NavLink href="/">Strona Główna</NavLink>
              <NavLink href="/about">O Nas</NavLink>
              <NavLink href="/contact">Kontakt</NavLink>
            </DesktopMenu>
            <CTAButton href="/contact">Darmowa Wycena</CTAButton>
          </RightSection>

          <HamburgerButton onClick={toggleMenu} aria-label="Menu">
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
        >
          <div style={{ transform: 'rotate(45deg)' }} />
          <div style={{ opacity: 0 }} />
          <div style={{ transform: 'rotate(-45deg)' }} />
        </HamburgerButton>

        <MobileNavLink href="/" onClick={toggleMenu}>Strona Główna</MobileNavLink>
        <MobileNavLink href="/about" onClick={toggleMenu}>O Nas</MobileNavLink>
        <MobileNavLink href="/contact" onClick={toggleMenu}>Kontakt</MobileNavLink>
        <CTAButton href="/contact" onClick={toggleMenu}>Darmowa Wycena</CTAButton>
      </MobileMenuOverlay>
    </>
  );
};

export default Navbar;
