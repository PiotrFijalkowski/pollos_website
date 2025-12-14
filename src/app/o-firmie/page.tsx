import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'O Firmie | Pollos - Agencja Marketingowa dla Gastronomii',
  description: 'Pollos to zespół ekspertów od marketingu dla restauracji i lokali. Poznaj naszą misję i dowiedz się, jak pomagamy markom rosnąć.',
};

export default function AboutPage() {
  return <AboutClient />;
}
