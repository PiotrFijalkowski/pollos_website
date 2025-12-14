import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Kontakt | Pollos - Porozmawiajmy o Marketingu',
  description: 'Skontaktuj się z nami, aby omówić strategię marketingową dla Twojego lokalu. Telefon, email i formularz kontaktowy.',
};

export default function ContactPage() {
  return <ContactClient />;
}
