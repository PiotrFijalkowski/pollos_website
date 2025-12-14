import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Nasze Usługi | Pollos - Agencja Marketingowa',
  description: 'Kompleksowe usługi marketingowe: Social Media, Kampanie Google/Meta, Fotografia i Wideo, Strony WWW oraz dedykowane pakiety dla Twojej firmy.',
};

export default function ServicesPage() {
  return <ServicesClient />;
}
