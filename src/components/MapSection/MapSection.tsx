'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
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

// URL do pliku mapy - user musi go wgrać do public/maps/poland.json
const GEO_URL = "/maps/poland.json";

const MapSection = () => {
  const theme = useTheme();
  const [content, setContent] = useState("");
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <Section id="obszar-dzialania">
      <Container>
        <ContentWrapper>
          <TextColumn>
            <Title>Działamy<br />Lokalnie i Zdalnie</Title>
            <Description>
              Jesteśmy z Białegostoku i to tutaj bije serce naszej agencji.
              Dla firm z Podlasia oferujemy pełen wachlarz usług, włącznie z realizacjami wideo i foto w Twojej siedzibie.
              <br /><br />
              Jesteś z innej części Polski? To nie problem! Kampanie reklamowe, social media i strony www realizujemy w 100% zdalnie z taką samą skutecznością.
            </Description>
          </TextColumn>

          <MapColumn>
            <ComposableMap
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [-19.0, -52.0, 0],
                scale: 3500,
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isPodlaskie = geo.properties.name === "podlaskie" || geo.properties.nazwa === "podlaskie" || geo.properties.name === "Podlaskie";
                    // Sprawdzamy różne warianty nazw, zależnie od pliku JSON

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setActiveRegion(geo.properties.name || geo.properties.nazwa);
                        }}
                        onMouseLeave={() => {
                          setActiveRegion(null);
                        }}
                        style={{
                          default: {
                            fill: isPodlaskie ? theme.colors.primary : "#E0E0E0",
                            outline: "none",
                            stroke: "#FFFFFF",
                            strokeWidth: 1.5,
                            transition: "all 0.3s ease",
                          },
                          hover: {
                            fill: isPodlaskie ? theme.colors.primary : "#9D9D9D",
                            outline: "none",
                            cursor: "pointer",
                            filter: isPodlaskie ? "brightness(1.1)" : "none",
                          },
                          pressed: {
                            fill: theme.colors.primary,
                            outline: "none",
                          },
                        }}
                        data-tooltip-id="map-tooltip"
                        data-tooltip-content={isPodlaskie ? "full" : "remote"}
                        data-tooltip-float
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>

            <Tooltip
              id="map-tooltip"
              style={{ backgroundColor: "transparent", padding: 0, opacity: 1 }}
              render={({ content }) => (
                <TooltipBox>
                  <TooltipTitle>
                    {content === "full" ? "Województwo Podlaskie" : "Cała Polska"}
                  </TooltipTitle>
                  <TooltipText>
                    {content === "full"
                      ? "✨ Pełna obsługa: Social Media, Strony WWW, Wideo & Foto z dojazdem."
                      : "🚀 Obsługa zdalna: Social Media, Strony WWW, Kampanie reklamowe."}
                  </TooltipText>
                </TooltipBox>
              )}
            />
          </MapColumn>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default MapSection;
