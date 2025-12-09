'use client';

import React, { useState } from 'react';
import {
  Section,
  Container,
  LeftColumn,
  RightColumn,
  Header,
  Label,
  Title,
  Description,
  AccordionItem,
  QuestionButton,
  QuestionText,
  IconWrapper,
  AnswerWrapper,
  AnswerText,
} from './FAQ.styles';

const faqData = [
  {
    question: 'Jak wygląda proces współpracy?',
    answer: 'Zaczynamy od bezpłatnej konsultacji, aby zrozumieć Twoje potrzeby. Następnie przygotowujemy strategię i harmonogram działań. Po akceptacji przechodzimy do realizacji, regularnie raportując postępy.',
  },
  {
    question: 'Czy oferujecie wsparcie po zakończeniu projektu?',
    answer: 'Tak, oferujemy pakiety utrzymaniowe i rozwojowe. Twój sukces jest dla nas priorytetem, dlatego dbamy o to, aby Twoje rozwiązania były zawsze aktualne i bezpieczne.',
  },
  {
    question: 'Jakie są koszty usług?',
    answer: 'Każdy projekt wyceniamy indywidualnie, biorąc pod uwagę jego zakres i stopień skomplikowania. Skontaktuj się z nami, aby otrzymać darmową wycenę.',
  },
  {
    question: 'Ile czasu trwa realizacja projektu?',
    answer: 'Czas realizacji zależy od skali projektu. Proste strony wizytówki to zazwyczaj 2-3 tygodnie, natomiast rozbudowane serwisy i aplikacje mogą zająć od 1 do 3 miesięcy.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section>
      <Container>
        <LeftColumn>
          <Header>
            <Label>FAQ</Label>
            <Title>Najczęściej zadawane pytania</Title>
            <Description>
              Masz pytania? Tutaj znajdziesz odpowiedzi na najczęściej pojawiające się wątpliwości dotyczące naszej współpracy, procesów i usług.
            </Description>
          </Header>
        </LeftColumn>

        <RightColumn>
          {faqData.map((item, index) => (
            <AccordionItem key={index}>
              <QuestionButton
                $isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              >
                <QuestionText>{item.question}</QuestionText>
                <IconWrapper $isOpen={openIndex === index} />
              </QuestionButton>
              <AnswerWrapper $isOpen={openIndex === index}>
                <AnswerText>{item.answer}</AnswerText>
              </AnswerWrapper>
            </AccordionItem>
          ))}
        </RightColumn>
      </Container>
    </Section>
  );
};

export default FAQ;
