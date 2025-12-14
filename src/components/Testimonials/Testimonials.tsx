'use client';

import React from 'react';
import {
  Section,
  Container,
  Header,
  Label,
  Title,
  Grid,
  Card,
  Stars,
  Quote,
  Author,
  AuthorInfo,
  AuthorName,
  AuthorRole,
} from './Testimonials.styles';

const testimonials = [
  {
    id: 1,
    name: 'Marek Nowak',
    role: 'Pakiet Custom',
    content: 'Współpraca z Pollos to strzał w dziesiątkę. Ich podejście do marketingu cyfrowego całkowicie odmieniło naszą obecność w sieci. Wyniki mówią same za siebie.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anna Kowalska',
    role: 'Pakiet Premium',
    content: 'Kreatywność i profesjonalizm na najwyższym poziomie. Zespół Pollos nie tylko dostarczył świetną stronę, ale też pomógł nam zrozumieć naszych klientów.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Tomasz Wiśniewski',
    role: 'Pakiet Growth',
    content: 'Dzięki ich strategii SEO nasz ruch organiczny wzrósł o 300% w ciągu 6 miesięcy. Polecam każdemu, kto szuka realnych efektów.',
    rating: 5,
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <Container>
        <Header>
          <Label>OPINIE</Label>
          <Title>Co mówią o nas klienci</Title>
        </Header>

        <Grid>
          {testimonials.map((item) => (
            <Card key={item.id}>
              <Stars>
                {[...Array(item.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </Stars>
              <Quote>"{item.content}"</Quote>
              <Author>
                <AuthorInfo>
                  <AuthorName>{item.name}</AuthorName>
                  <AuthorRole>{item.role}</AuthorRole>
                </AuthorInfo>
              </Author>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Testimonials;
