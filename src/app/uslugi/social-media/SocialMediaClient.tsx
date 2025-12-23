'use client';

import React from 'react';
import Image from 'next/image';
import {
  SubpageContainer,
  SubpageHero,
  SubpageTitle,
  SubpageDescription,
} from '@/components/Shared/Subpage.styles';
import {
  FeatureSection,
  FeatureContainer,
  FeatureGrid,
  ContentColumn,
  VisualColumn,
  SectionNumber,
  SectionTitle,
  SectionDescription,
  FeatureList,
  FeatureItem,
  VisualPlaceholder
} from '@/components/Shared/FeatureSection.styles';
import { CTASection, CTATitle, CTADescription, CTAButton } from '../page.styles';

export default function SocialMediaClient() {
  const sections = [
    {
      number: "01",
      title: "Prowadzenie profili",
      description: "Dbamy o to, aby Twoje profile w mediach społecznościowych były spójne, atrakcyjne i angażujące.",
      items: [
        "Profesjonalne prowadzenie kont na Instagramie, Facebooku i TikToku",
        "Kreowanie wizerunku Twojego lokalu w sieci",
        "Regularne publikacje dopasowane do charakteru i stylu Twojej marki"
      ],
      icon: (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/assets/social_pro.png"
            alt="Prowadzenie profili social media"
            fill
            style={{ objectFit: 'contain', borderRadius: '20px', padding: '16px' }}
          />
        </div>
      )
    },
    {
      number: "02",
      title: "Strategia contentowa",
      description: "Tworzymy spersonalizowaną strategię, dzięki której Twoje social media nie będą działały „na oślep”.",
      items: [
        "Analiza grupy docelowej i lokalnego rynku",
        "Plan publikacji dopasowany do trendów i sezonowości",
        "Dobór formatów: zdjęcia, filmy, rolki, stories"
      ],
      icon: (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/assets/strategia.png"
            alt="Strategia contentowa"
            fill
            style={{ objectFit: 'contain', borderRadius: '20px', padding: '16px' }}
          />
        </div>
      )
    },
    {
      number: "03",
      title: "Publikacje + moderacja",
      description: "Nie tylko publikujemy treści, ale też dbamy o interakcję z Twoimi klientami.",
      items: [
        "Regularne posty, rolki i stories dopasowane do Twojej branży",
        "Moderacja komentarzy i wiadomości, szybkie odpowiadanie na pytania klientów",
        "Budowanie pozytywnego wizerunku i zaangażowanej społeczności"
      ],
      icon: (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/assets/publish.png"
            alt="Publikacje i moderacja"
            fill
            style={{ objectFit: 'contain', borderRadius: '20px', padding: '16px' }}
          />
        </div>
      )
    },
    {
      number: "04",
      title: "Analiza wyników",
      description: "Sprawdzamy, co działa, a co wymaga poprawy – dzięki temu Twoje kampanie są coraz skuteczniejsze.",
      items: [
        "Raporty z wynikami działań social media",
        "Analiza zasięgów, zaangażowania i konwersji",
        "Rekomendacje optymalizacji strategii i publikacji"
      ],
      icon: (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/assets/why.png"
            alt="Analiza wyników"
            fill
            style={{ objectFit: 'contain', borderRadius: '20px', padding: '16px' }}
          />
        </div>
      )
    }
  ];

  return (
    <SubpageContainer>
      <SubpageHero>
        <SubpageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Social Media
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Zwiększ widoczność i przyciągnij nowych klientów. Tworzymy treści, które budują zaangażowaną społeczność wokół Twojego biznesu.
        </SubpageDescription>
      </SubpageHero>

      {sections.map((section, idx) => (
        <FeatureSection key={idx} $alternate={idx % 2 !== 0}>
          <FeatureContainer>
            <FeatureGrid $reversed={idx % 2 !== 0}>
              <ContentColumn
                $reversed={idx % 2 !== 0}
                initial={{ opacity: 0, x: idx % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <SectionNumber>{section.number}</SectionNumber>
                <SectionTitle>{section.title}</SectionTitle>
                <SectionDescription>{section.description}</SectionDescription>
                <FeatureList>
                  {section.items.map((item, i) => (
                    <FeatureItem key={i}>{item}</FeatureItem>
                  ))}
                </FeatureList>
              </ContentColumn>

              <VisualColumn
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <VisualPlaceholder>
                  {section.icon}
                </VisualPlaceholder>
              </VisualColumn>
            </FeatureGrid>
          </FeatureContainer>
        </FeatureSection>
      ))}

      <CTASection>
        <CTATitle>Chcesz, aby Twój lokal był zauważony w sieci?</CTATitle>
        <CTADescription>
          Skontaktuj się z nami i zacznij przyciągać nowych klientów dzięki profesjonalnym social mediom.
        </CTADescription>
        <CTAButton
          href="/kontakt"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skontaktuj się z nami
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </CTAButton>
      </CTASection>

    </SubpageContainer>
  );
}
