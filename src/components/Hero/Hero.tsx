'use client';

import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Headline,
  Subheadline,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  BackgroundShape,
} from './Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundShape />
      <HeroContent>
        <Headline>
          Tworzymy cyfrowe
          <span>doświadczenia</span>
        </Headline>
        <Subheadline>
          Pomagamy markom rosnąć dzięki strategicznej kreatywności i rozwiązaniom opartym na danych. Zbuduj z nami swoją przyszłość.
        </Subheadline>
        <ButtonGroup>
          <PrimaryButton href="/contact">Rozpocznij współpracę</PrimaryButton>
          <SecondaryButton href="/portfolio">Zobacz nasze prace</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
