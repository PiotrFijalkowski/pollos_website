'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
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
} from '@/components/FAQ/FAQ.styles';
import {
  AboutCTA,
  AboutCTAContainer
} from '@/app/o-firmie/about.styles';
import { SectionTitle, SectionDescription } from '@/components/Shared/FeatureSection.styles';
import { CTAButton } from '@/app/uslugi/pakiety/pricing.styles';

// Custom styles for category headers within the RightColumn
const CategoryBlock = styled.div`
  margin-bottom: 60px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.accent};
  display: inline-block;
`;

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const faqCategories = [
    {
      title: "Social Media",
      questions: [
        {
          id: "sm-1",
          q: "Jak często publikujecie treści na profilach social media?",
          a: "Optymalizujemy częstotliwość publikacji pod potrzeby Twojego lokalu – zazwyczaj 3–5 postów tygodniowo, plus regularne stories lub rolki."
        },
        {
          id: "sm-2",
          q: "Czy zajmujecie się moderacją komentarzy i wiadomości?",
          a: "Tak, odpowiadamy na komentarze i wiadomości, aby budować zaangażowanie i pozytywny wizerunek Twojego lokalu."
        },
        {
          id: "sm-3",
          q: "Czy tworzycie treści graficzne i wideo na social media?",
          a: "Tak, produkujemy zdjęcia, filmy, rolki i stories dopasowane do charakteru Twojego lokalu i grupy docelowej."
        },
        {
          id: "sm-4",
          q: "Czy mogę samodzielnie wprowadzać treści na profilach?",
          a: "Oczywiście, możesz mieć dostęp do konta i współtworzyć publikacje, a my zadbamy o spójność i strategię."
        },
        {
          id: "sm-5",
          q: "Jak mierzycie skuteczność działań w social media?",
          a: "Analizujemy zasięgi, zaangażowanie i konwersje, a wyniki raportujemy w prostych i czytelnych raportach."
        }
      ]
    },
    {
      title: "Reklamy",
      questions: [
        {
          id: "ads-1",
          q: "Jakie platformy reklamowe obsługujecie?",
          a: "Tworzymy kampanie Meta Ads (FB/IG), Google Ads, kampanie lokalne i remarketing."
        },
        {
          id: "ads-2",
          q: "Czy mogę ustawić budżet reklamowy według własnych potrzeb?",
          a: "Tak, dostosowujemy kampanie do Twojego budżetu, dbając o maksymalną efektywność."
        },
        {
          id: "ads-3",
          q: "Jak długo trwa przygotowanie kampanii?",
          a: "Zwykle 3–7 dni roboczych na przygotowanie kampanii, w zależności od zakresu działań i materiałów kreatywnych."
        },
        {
          id: "ads-4",
          q: "Jak raportujecie wyniki kampanii?",
          a: "Regularnie przesyłamy raporty z wynikami kampanii, z rekomendacjami optymalizacji i wskazaniem najlepiej działających kreacji."
        },
        {
          id: "ads-5",
          q: "Czy mogę w trakcie zmienić strategię reklamową?",
          a: "Tak, kampanie są elastyczne i możemy je dopasować do aktualnych potrzeb Twojego lokalu."
        }
      ]
    },
    {
      title: "Zdjęcia i wideo",
      questions: [
        {
          id: "fv-1",
          q: "Jakiego rodzaju zdjęcia i filmy tworzycie?",
          a: "Robimy zdjęcia lokalu i jedzenia, filmy pod Reels/TikTok oraz rolki reklamowe dopasowane do social media i kampanii."
        },
        {
          id: "fv-2",
          q: "Czy mogę zamówić sesje cykliczne?",
          a: "Tak, planujemy regularne sesje, aby stale dostarczać świeży content dla Twoich kanałów."
        },
        {
          id: "fv-3",
          q: "Czy zajmujecie się montażem wideo?",
          a: "Tak, przygotowujemy gotowe filmy do publikacji w social media i kampaniach reklamowych."
        },
        {
          id: "fv-4",
          q: "Jak długo trwa przygotowanie materiałów foto/wideo?",
          a: "Standardowo 2–5 dni roboczych, w zależności od ilości zdjęć i długości materiałów video."
        },
        {
          id: "fv-5",
          q: "Czy materiały są dostosowane do wszystkich platform społecznościowych?",
          a: "Tak, przygotowujemy treści w formatach optymalnych pod Instagram, Facebook, TikTok i inne kanały."
        }
      ]
    },
    {
      title: "Strony WWW",
      questions: [
        {
          id: "web-1",
          q: "Jakie typy stron tworzycie dla lokali?",
          a: "Tworzymy strony wizytówki, landing pages i strony pod kampanie, w pełni responsywne i zoptymalizowane pod mobile."
        },
        {
          id: "web-2",
          q: "Czy mogę zlecić optymalizację istniejącej strony?",
          a: "Tak, analizujemy i optymalizujemy strony pod względem UX, szybkości i SEO."
        },
        {
          id: "web-3",
          q: "Ile czasu trwa stworzenie strony internetowej?",
          a: "Zwykle 7–14 dni roboczych, zależnie od zakresu i funkcjonalności strony."
        },
        {
          id: "web-4",
          q: "Czy strony są responsywne i działają na telefonach?",
          a: "Tak, każda strona jest w pełni responsywna, zoptymalizowana pod mobile i tablet."
        },
        {
          id: "web-5",
          q: "Czy mogę samodzielnie edytować stronę po jej uruchomieniu?",
          a: "Tak, udostępniamy prosty panel administracyjny do samodzielnej edycji treści."
        }
      ]
    },
    {
      title: "Współpraca",
      questions: [
        {
          id: "coop-1",
          q: "Jak wygląda proces współpracy z Pollos?",
          a: "Zaczynamy od konsultacji i analizy Twojego lokalu, następnie przygotowujemy strategię i harmonogram działań, a potem regularnie raportujemy efekty."
        },
        {
          id: "coop-2",
          q: "Czy mogę zmienić zakres usług w trakcie współpracy?",
          a: "Tak, oferujemy elastyczne pakiety i dopasowanie działań do bieżących potrzeb lokalu."
        },
        {
          id: "coop-3",
          q: "Jak wygląda kontakt i wsparcie w trakcie współpracy?",
          a: "Oferujemy bezpośredni kontakt mailowy, telefoniczny oraz konsultacje online w ustalonych terminach."
        },
        {
          id: "coop-4",
          q: "Jakie są minimalne okresy współpracy?",
          a: "Nie wymagamy długich zobowiązań – współpraca jest elastyczna, najczęściej zaczynamy od miesiąca próbnego."
        },
        {
          id: "coop-5",
          q: "Czy mogę połączyć różne usługi w jednym pakiecie?",
          a: "Tak, tworzymy indywidualne pakiety marketingowe dopasowane do potrzeb i budżetu Twojego lokalu."
        }
      ]
    }
  ];

  return (
    <main>
      <Section style={{ paddingTop: '150px' }}> {/* Increased padding for top spacing */}
        <Container>
          <LeftColumn>
            <Header>
              <Label>FAQ</Label>
              <Title>Najczęściej<br />zadawane pytania</Title>
              <Description>
                Masz pytania? Tutaj znajdziesz odpowiedzi na najczęściej pojawiające się wątpliwości dotyczące naszej współpracy, procesów i usług.
                <br /><br />
                W Pollos chcemy, aby współpraca była jasna i prosta.
              </Description>
            </Header>
          </LeftColumn>

          <RightColumn>
            {faqCategories.map((category, idx) => (
              <CategoryBlock key={idx}>
                <CategoryTitle>{category.title}</CategoryTitle>
                {category.questions.map((item) => (
                  <AccordionItem key={item.id}>
                    <QuestionButton
                      $isOpen={openIndex === item.id}
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <QuestionText>{item.q}</QuestionText>
                      <IconWrapper $isOpen={openIndex === item.id} />
                    </QuestionButton>
                    <AnswerWrapper $isOpen={openIndex === item.id}>
                      <AnswerText>{item.a}</AnswerText>
                    </AnswerWrapper>
                  </AccordionItem>
                ))}
              </CategoryBlock>
            ))}
          </RightColumn>
        </Container>
      </Section>

      <AboutCTA>
        <AboutCTAContainer>
          <SectionTitle>Masz więcej pytań?</SectionTitle>
          <SectionDescription>
            Skontaktuj się z Pollos, a rozwiejemy wszelkie wątpliwości i dopasujemy najlepsze rozwiązania marketingowe dla Twojego lokalu.
          </SectionDescription>
          <CTAButton
            href="/kontakt"
            style={{ width: 'auto', paddingLeft: '40px', paddingRight: '40px', fontSize: '1.2rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skontaktuj się z nami
          </CTAButton>
        </AboutCTAContainer>
      </AboutCTA>
    </main>
  );
}
