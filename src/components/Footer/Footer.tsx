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
  LinkList,
  LinkItem,
  ContactItem,
  ContactLabel,
  ContactValue,
  BottomSection,
  Copyright,
} from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <ContentWrapper>
        <TopSection>
          {/* Column 1: Brand */}
          <LogoColumn>
            <LogoText>POLLOS</LogoText>
            <Description>
              Marketing, który pomaga markom rosnąć. Strategia, content, reklamy i technologia w jednym miejscu.
            </Description>
          </LogoColumn>

          {/* Column 2: Menu */}
          <LinksColumn>
            <ColumnTitle>Menu</ColumnTitle>
            <LinkList>
              <LinkItem href="/">Strona główna</LinkItem>
              <LinkItem href="/o-firmie">O nas</LinkItem>
              <LinkItem href="/uslugi">Usługi</LinkItem>
              <LinkItem href="/dla-kogo">Dla kogo</LinkItem>
              <LinkItem href="/faq">FAQ</LinkItem>
              <LinkItem href="/kontakt">Kontakt</LinkItem>
            </LinkList>
          </LinksColumn>

          {/* Column 3: Usługi */}
          <LinksColumn>
            <ColumnTitle>Usługi</ColumnTitle>
            <LinkList>
              <LinkItem href="/uslugi/social-media">Social media</LinkItem>
              <LinkItem href="/uslugi/kampanie-reklamowe">Kampanie reklamowe</LinkItem>
              <LinkItem href="/uslugi/zdjecia-i-filmy">Foto & wideo</LinkItem>
              <LinkItem href="/uslugi/strony-internetowe">Strony WWW</LinkItem>
              <LinkItem href="/uslugi/pakiety">Pakiety marketingowe</LinkItem>
            </LinkList>
          </LinksColumn>

          {/* Column 4: Kontakt */}
          <LinksColumn>
            <ColumnTitle>Kontakt</ColumnTitle>
            <LinkList>
              <ContactItem href="mailto:kontakt@pollos.pl">
                <ContactLabel>Napisz do nas</ContactLabel>
                <ContactValue>kontakt@pollos.pl</ContactValue>
              </ContactItem>
              <ContactItem href="tel:+48572047036">
                <ContactLabel>Zadzwoń</ContactLabel>
                <ContactValue>+48 572 047 036</ContactValue>
              </ContactItem>
              <ContactItem as="div">
                <ContactLabel>Biuro</ContactLabel>
                <ContactValue>Białystok, Polska</ContactValue>
              </ContactItem>
            </LinkList>
          </LinksColumn>
        </TopSection>

        {/* Bottom Section */}
        <BottomSection>
          <Copyright>
            &copy; {currentYear} Pollos. Wszelkie prawa zastrzeżone.
          </Copyright>
        </BottomSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
