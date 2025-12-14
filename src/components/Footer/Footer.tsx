'use client';

import React from 'react';
import {
  FooterContainer,
  ContentWrapper,
  TopSection,
  LogoColumn,
  LogoText,
  Description,
  LinksColumn,
  ColumnTitle,
  LinkItem,
  BottomSection,
  Copyright,
  SocialLinks,
  SocialIcon,
} from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ContentWrapper>
        <TopSection>
          <LogoColumn>
            <LogoText>POLLOS</LogoText>
            <Description>
              Helping businesses grow through strategic marketing and digital innovation.
              Let's build something amazing together.
            </Description>
          </LogoColumn>

          <LinksColumn>
            <ColumnTitle>Menu</ColumnTitle>
            <LinkItem href="/">Strona Główna</LinkItem>
            <LinkItem href="/about">O Nas</LinkItem>
            <LinkItem href="/kontakt">Kontakt</LinkItem>
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Services</ColumnTitle>
            <LinkItem href="/#services">Strategy</LinkItem>
            <LinkItem href="/#services">Social Media</LinkItem>
            <LinkItem href="/#services">Development</LinkItem>
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <LinkItem href="mailto:hello@pollos.com">hello@pollos.com</LinkItem>
            <LinkItem href="tel:+48572047036">+48 572 047 036</LinkItem>
            <LinkItem href="#">Warsaw, Poland</LinkItem>
          </LinksColumn>
        </TopSection>

        <BottomSection>
          <Copyright>
            &copy; {currentYear} Pollos Agency. All rights reserved.
          </Copyright>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect></svg>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
            </SocialIcon>
          </SocialLinks>
        </BottomSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
