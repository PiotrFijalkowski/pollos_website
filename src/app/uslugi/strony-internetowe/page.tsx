import type { Metadata } from 'next';
import WebsitesClient from './WebsitesClient';

export const metadata: Metadata = {
  title: 'Strony Internetowe | Pollos - Nowoczesne Strony WWW',
  description: 'Projektowanie i tworzenie stron internetowych dla gastronomii. Responsywne strony wizytówki, landing page i sklepy online.',
};

export default function WebsitesPage() {
  return <WebsitesClient />;
}
