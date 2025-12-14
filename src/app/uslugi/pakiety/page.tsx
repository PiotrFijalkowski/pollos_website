'use client';

import React from 'react';
import {
  SubpageContainer,
  SubpageHero,
  SubpageTitle,
  SubpageDescription,
} from '@/components/Shared/Subpage.styles';
import {
  PricingContainer,
  PricingGrid,
  PricingCard,
  CardHeader,
  PackageTitle,
  PackageDescription,
  FeaturesList,
  FeatureItem,
  CTAButton
} from './pricing.styles';

export default function PackagesPage() {
  const packages = [
    {
      title: "Pakiet Start",
      description: "Idealny na start. Zbuduj podstawy swojej obecności w sieci.",
      highlighted: false,
      items: [
        "Prowadzenie profili social media (IG / FB / TikTok)",
        "Publikacje i moderacja treści",
        "Podstawowa analityka wyników"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      )
    },
    {
      title: "Pakiet Growth",
      description: "Przyspiesz wzrost dzięki reklamom i lepszemu contentowi.",
      highlighted: true, // Recommended option
      items: [
        "Wszystko z Pakietu Start",
        "Kampanie reklamowe Meta Ads i Google Ads",
        "Profesjonalne zdjęcia i krótkie filmy"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Pakiet Premium",
      description: "Pełna dominacja. Kompleksowa strategia i produkcja wideo.",
      highlighted: false,
      items: [
        "Wszystko z Pakietu Growth",
        "Rozbudowane strategie contentowe",
        "Produkcja wideo (Reels/TikTok) + Reklamy",
        "Optymalizacja stron WWW"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: "Custom",
      description: "Szyte na miarę. Rozwiązania dla unikalnych potrzeb.",
      highlighted: false,
      items: [
        "Dopasowany zakres usług",
        "Elastyczne harmonogramy",
        "Cykliczne sesje foto/wideo",
        "Dedykowany opiekun"
      ],
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
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
          Pakiety Marketingowe
        </SubpageTitle>
        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Wybierz rozwiązanie dopasowane do etapu rozwoju Twojego biznesu. Przejrzyste zasady, mierzalne efekty.
        </SubpageDescription>
      </SubpageHero>

      <PricingContainer>
        <PricingGrid>
          {packages.map((pkg, idx) => (
            <PricingCard
              key={idx}
              $highlighted={pkg.highlighted}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <CardHeader>
                <div className="icon">
                  {pkg.icon}
                </div>
                <PackageTitle>{pkg.title}</PackageTitle>
                <PackageDescription>{pkg.description}</PackageDescription>
              </CardHeader>

              <FeaturesList>
                {pkg.items.map((item, i) => (
                  <FeatureItem key={i}>{item}</FeatureItem>
                ))}
              </FeaturesList>

              <CTAButton
                href="/kontakt"
                $outline={!pkg.highlighted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Wybierz pakiet
              </CTAButton>
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingContainer>
    </SubpageContainer>
  );
}
