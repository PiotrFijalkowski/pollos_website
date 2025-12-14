'use client';

import React from 'react';
import {
  SubpageContainer,
  SubpageHero,
  SubpageTitle,
  SubpageDescription
} from '@/components/Shared/Subpage.styles';
import { CTAButton } from '@/app/uslugi/pakiety/pricing.styles';

export default function KnowledgeClient() {
  return (
    <SubpageContainer>
      <SubpageHero>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '32px',
          color: '#ec4899' // accent color
        }}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="18.01" />
            <line x1="12" y1="14" x2="12" y2="16" />
          </svg>
        </div>

        <SubpageTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Strona w budowie
        </SubpageTitle>

        <SubpageDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ maxWidth: '600px', margin: '0 auto 40px' }}
        >
          Pracujemy nad przygotowaniem wartościowych treści edukacyjnych.
          Zajrzyj do nas wkrótce po dawkę wiedzy o marketingu gastronomicznym!
        </SubpageDescription>

        <CTAButton
          href="/"
          style={{ width: 'auto', display: 'inline-flex', padding: '16px 32px' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Wróć na stronę główną
        </CTAButton>
      </SubpageHero>
    </SubpageContainer>
  );
}
