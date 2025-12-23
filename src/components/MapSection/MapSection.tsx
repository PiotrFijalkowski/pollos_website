'use client';

import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import {
  Section,
  Container,
  ContentWrapper,
  TextColumn,
  MapColumn,
  Title,
  Description,
  TooltipBox,
  TooltipTitle,
  TooltipText,
} from './MapSection.styles';
import { useTheme } from 'styled-components';
import { POLAND_MAP_DATA } from './PolandMapData';

const MapSection = () => {
  const theme = useTheme();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const isPodlaskieCheck = (name: string) => {
    return name === "Podlaskie" || name === "województwo podlaskie";
  };

  return (
    <Section id="obszar-dzialania">
      <Container>
        <ContentWrapper>
          <MapColumn>
            <svg
              viewBox="0 0 1000 1000"
              style={{ width: "100%", height: "100%", maxHeight: "600px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                {POLAND_MAP_DATA.map((geo) => {
                  const isPodlaskie = isPodlaskieCheck(geo.name);
                  const isActive = activeRegion === geo.name;

                  // Use theme colors
                  const defaultFill = isPodlaskie ? theme.colors.accent : "#E0E0E0";
                  const hoverFill = isPodlaskie ? theme.colors.accent : "#D0D0D0";

                  return (
                    <path
                      key={geo.id}
                      d={geo.path}
                      fill={isActive ? hoverFill : defaultFill}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      style={{
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        outline: "none",
                      }}
                      onMouseEnter={() => setActiveRegion(geo.name)}
                      onMouseLeave={() => setActiveRegion(null)}
                      data-tooltip-id="map-tooltip"
                      data-tooltip-content={isPodlaskie ? "full" : "remote"}
                      data-tooltip-float
                    />
                  );
                })}
              </g>
            </svg>

            <Tooltip
              id="map-tooltip"
              style={{ backgroundColor: "transparent", padding: 0, opacity: 1 }}
              render={({ content }: { content: string | null }) => (
                <TooltipBox>
                  <TooltipTitle>
                    {content === "full" ? "Województwo Podlaskie" : "Cała Polska"}
                  </TooltipTitle>
                  <TooltipText style={{ color: theme.colors.textSecondary }}>
                    {content === "full"
                      ? "✨ Pełna obsługa: Social Media, Strony WWW, Wideo & Foto z dojazdem."
                      : "🚀 Obsługa zdalna: Social Media, Strony WWW, Kampanie reklamowe."}
                  </TooltipText>
                </TooltipBox>
              )}
            />
          </MapColumn>

          <TextColumn>
            <Title>Działamy<br />Lokalnie i Zdalnie</Title>
            <Description>
              Jesteśmy z Białegostoku i to tutaj bije serce naszej agencji.
              Dla firm z Podlasia oferujemy pełen wachlarz usług, włącznie z realizacjami wideo i foto w Twojej siedzibie.
              <br /><br />
              Jesteś z innej części Polski? To nie problem! Kampanie reklamowe, social media i strony www realizujemy w 100% zdalnie z taką samą skutecznością.
            </Description>
          </TextColumn>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default MapSection;
