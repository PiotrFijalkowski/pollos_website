import type { Metadata } from 'next';
import KnowledgeClient from './KnowledgeClient';

export const metadata: Metadata = {
  title: 'Wiedza | Pollos - Blog o Marketingu Gastronomicznym',
  description: 'Poradniki, artykuły i wskazówki jak skutecznie promować restaurację, bar czy kawiarnię w internecie.',
};

export default function KnowledgePage() {
  return <KnowledgeClient />;
}
