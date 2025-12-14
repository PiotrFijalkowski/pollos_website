import type { Metadata } from 'next';
import PackagesClient from './PackagesClient';

export const metadata: Metadata = {
  title: 'Pakiety Marketingowe | Pollos - Cennik Usług',
  description: 'Sprawdź nasze pakiety marketingowe dla gastronomii. Jasne zasady współpracy, elastyczne ceny i kompleksowa obsługa.',
};

export default function PackagesPage() {
  return <PackagesClient />;
}
