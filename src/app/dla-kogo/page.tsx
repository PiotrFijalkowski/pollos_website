import type { Metadata } from 'next';
import ForWhoClient from './ForWhoClient';

export const metadata: Metadata = {
  title: 'Dla Kogo | Pollos - Marketing dla Gastronomii',
  description: 'Sprawdź, komu pomagamy: Restauracje, Kawiarnie, Bary, Foodtrucki i inne lokale usługowe. Dedykowane strategie marketingowe.',
};

export default function ForWhoPage() {
  return <ForWhoClient />;
}
