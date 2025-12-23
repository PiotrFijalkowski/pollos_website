'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  BannerContainer,
  BannerContent,
  ImageWrapper,
  TextContent,
  PrivacyLink,
  ButtonGroup,
  Button,
} from './CookieBanner.styles';

const COOKIE_CONSENT_KEY = 'pollos-cookie-consent';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <BannerContainer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <ImageWrapper>
        <Image
          src="/assets/cookies.png"
          alt="Kurczak jedzący ciastko"
          width={110}
          height={110}
          priority
        />
      </ImageWrapper>

      <BannerContent>
        <TextContent>
          <h3>Ciasteczka dla kurczaka!</h3>
          <p>
            Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie.
            Kontynuując przeglądanie, zgadzasz się na ich użycie. {' '}
            <PrivacyLink href="/kontakt">Dowiedz się więcej</PrivacyLink>
          </p>
        </TextContent>

        <ButtonGroup>
          <Button
            $variant="primary"
            onClick={handleAccept}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Akceptuję
          </Button>
          <Button
            $variant="secondary"
            onClick={handleDecline}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Odrzuć
          </Button>
        </ButtonGroup>
      </BannerContent>
    </BannerContainer>
  );
};

export default CookieBanner;
