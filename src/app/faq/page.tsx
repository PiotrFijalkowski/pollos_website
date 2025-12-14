import type { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ | Pollos - Najczęściej Zadawane Pytania',
  description: 'Odpowiedzi na najczęściej zadawane pytania dot. współpracy, marketingu, social media, kampanii reklamowych i stron www.',
};

export default function FAQPage() {
  return <FAQClient />;
}
