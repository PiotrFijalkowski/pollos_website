'use client';

import React from 'react';
import Link from 'next/link';
import {
  AboutHero,
  HeroContent,
  HeroTitle,
  HeroText,
  AboutCTA,
  AboutCTAContainer
} from '@/app/o-firmie/about.styles';
import {
  FeatureSection,
  FeatureContainer,
  FeatureGrid,
  ContentColumn,
  VisualColumn,
  SectionTitle,
  SectionDescription,
  VisualPlaceholder,
} from '@/components/Shared/FeatureSection.styles';
import { CTAButton } from '@/app/uslugi/pakiety/pricing.styles';

export default function ForWhoPage() {
  const segments = [
    {
      title: "Restauracje",
      description: (
        <>
          Pomagamy restauracjom wyróżnić się w sieci i przyciągać gości. Tworzymy profesjonalne <Link href="/uslugi/zdjecia-i-filmy">zdjęcia potraw</Link>, <Link href="/uslugi/zdjecia-i-filmy">rolki reklamowe</Link>, <Link href="/uslugi/social-media">prowadzenie social media</Link> i <Link href="/uslugi/kampanie-reklamowe">kampanie lokalne</Link>, aby każdy stolik był zajęty.
        </>
      ),
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Kawiarnie",
      description: (
        <>
          Kawiarnie zyskują dzięki Pollos rozpoznawalność w <Link href="/uslugi/social-media">social mediach</Link>. Publikujemy przyciągające <Link href="/uslugi/zdjecia-i-filmy">zdjęcia i filmy</Link>, tworzymy strategie contentowe oraz prowadzimy <Link href="/uslugi/kampanie-reklamowe">kampanie reklamowe</Link>, które przyciągają miłośników kawy i atmosfery lokalu.
        </>
      ),
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 1v3M10 1v3M14 1v3" />
        </svg>
      )
    },
    {
      title: "Bary",
      description: (
        <>
          Bary potrzebują przyciągnąć uwagę w godzinach wieczornych i promować wydarzenia specjalne. Pollos tworzy treści video, <Link href="/uslugi/zdjecia-i-filmy">rolki reklamowe</Link>, prowadzi profile i <Link href="/uslugi/kampanie-reklamowe">kampanie reklamowe</Link>, które skutecznie angażują gości i budują rozpoznawalność.
        </>
      ),
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M10 9L7 3M14 9l3-6" />
        </svg>
      )
    },
    {
      title: "Foodtrucki",
      description: (
        <>
          Foodtrucki zyskują dzięki marketingowi lokalnemu i <Link href="/uslugi/social-media">social media</Link>, które pokazują dokładnie, gdzie jesteś. Tworzymy zdjęcia, krótkie filmy, <Link href="/uslugi/kampanie-reklamowe">kampanie lokalne</Link> i strategie contentowe, aby klienci wiedzieli, kiedy Cię znaleźć.
        </>
      ),
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Usługi Lokalne",
      description: (
        <>
          Pollos wspiera także inne lokale usługowe, które chcą zwiększyć widoczność online. Tworzymy content, <Link href="/uslugi/social-media">prowadzenie social media</Link>, <Link href="/uslugi/kampanie-reklamowe">kampanie reklamowe</Link> i <Link href="/uslugi/strony-internetowe">strony internetowe</Link> dopasowane do charakteru Twojej działalności.
        </>
      ),
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <main>
      <AboutHero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Marketing dla Twojego lokalu
          </HeroTitle>
          <HeroText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Niezależnie od tego, czy prowadzisz restaurację, kawiarnię, bar czy foodtruck,
            nasze działania pomogą Ci przyciągnąć klientów i zwiększyć widoczność w sieci.
          </HeroText>
        </HeroContent>
      </AboutHero>

      {segments.map((segment, idx) => (
        <FeatureSection key={idx} $alternate={idx % 2 === 0}>
          <FeatureContainer>
            <FeatureGrid $reversed={idx % 2 !== 0}>
              <ContentColumn
                $reversed={idx % 2 !== 0}
                initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionTitle>{segment.title}</SectionTitle>
                <SectionDescription>{segment.description}</SectionDescription>
              </ContentColumn>
              <VisualColumn
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <VisualPlaceholder>
                  {segment.icon}
                </VisualPlaceholder>
              </VisualColumn>
            </FeatureGrid>
          </FeatureContainer>
        </FeatureSection>
      ))}

      <AboutCTA>
        <AboutCTAContainer>
          <SectionTitle>Dopasuj strategię do swojego biznesu</SectionTitle>
          <SectionDescription>
            Nie ważne, jaki typ lokalu prowadzisz – w Pollos stworzymy strategię marketingową idealnie dopasowaną do Ciebie.
          </SectionDescription>
          <CTAButton
            href="/kontakt"
            style={{ width: 'auto', paddingLeft: '40px', paddingRight: '40px', fontSize: '1.2rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skontaktuj się z nami
          </CTAButton>
        </AboutCTAContainer>
      </AboutCTA>
    </main>
  );
}
