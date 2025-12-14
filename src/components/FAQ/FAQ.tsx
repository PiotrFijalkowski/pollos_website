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
    question: 'Jak wygląda start współpracy?',
    answer: 'Zaczynamy od bezpłatnej konsultacji i krótkiego rozpoznania potrzeb. Na tej podstawie proponujemy zakres działań i dalsze kroki.',
  },
  {
    question: 'Czy mogę wybrać tylko jedną usługę?',
    answer: 'Tak. Możesz skorzystać z pojedynczych usług lub połączyć je w spójną strategię dopasowaną do Twojej marki.',
  },
  {
    question: 'Jak szybko widać efekty działań?',
    answer: 'Pierwsze efekty są widoczne już po kilku tygodniach. Długofalowe rezultaty wymagają regularnych i konsekwentnych działań.',
  },
  {
    question: 'Czy współpraca jest długoterminowa?',
    answer: 'Współpracujemy elastycznie. Możesz działać z nami projektowo lub długoterminowo – w zależności od potrzeb.',
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
