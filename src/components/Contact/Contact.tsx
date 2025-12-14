'use client';

import React, { useState, FormEvent } from 'react';
import {
  Section,
  Container,
  InfoColumn,
  Header,
  Label,
  Title,
  Description,
  ContactDetails,
  ContactItem,
  IconWrapper,
  ContactText,
  ContactLabel,
  ContactValue,
  FormColumn,
  FormTagline,
  Form,
  FormGroup,
  InputLabel,
  Input,
  TextArea,
  SubmitButton,
} from './Contact.styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact">
      <Container>
        <FormColumn>
          <FormTagline>Bezpłatna konsultacja • Odpowiadamy zazwyczaj w ciągu 24h</FormTagline>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <InputLabel>Imię i Nazwisko</InputLabel>
              <Input
                type="text"
                name="name"
                placeholder="Jan Kowalski"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <InputLabel>Email</InputLabel>
              <Input
                type="email"
                name="email"
                placeholder="jan@firma.pl"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <InputLabel>Wiadomość</InputLabel>
              <TextArea
                name="message"
                placeholder="Tu wpisz wiadomość..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
            </SubmitButton>
          </Form>
        </FormColumn>

        <InfoColumn>
          <Header>
            <Label>KONTAKT</Label>
            <Title>Porozmawiajmy<br /> o Twojej marce</Title>
            <Description>
              Masz pomysł, problem lub po prostu chcesz sprawdzić, czy możemy pomóc?
              Zostaw kontakt — wrócimy z konkretną propozycją, bez lania wody.
            </Description>
          </Header>

          <ContactDetails>
            <ContactItem>
              <IconWrapper>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </IconWrapper>
              <ContactText>
                <ContactLabel>Email</ContactLabel>
                <ContactValue href="mailto:kontakt@pollos.pl">kontakt@pollos.pl</ContactValue>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </IconWrapper>
              <ContactText>
                <ContactLabel>Telefon</ContactLabel>
                <ContactValue href="tel:+48572047036">+48 572 047 036</ContactValue>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <IconWrapper>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </IconWrapper>
              <ContactText>
                <ContactLabel>Biuro</ContactLabel>
                <ContactValue href="#">Białystok, Polska</ContactValue>
              </ContactText>
            </ContactItem>
          </ContactDetails>
        </InfoColumn>
      </Container>
    </Section>
  );
};

export default Contact;
