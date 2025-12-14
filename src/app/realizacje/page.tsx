import type { Metadata } from 'next';
import RealizacjeClient from './RealizacjeClient';

export const metadata: Metadata = {
  title: 'Realizacje | Pollos - Nasze Projekty Marketingowe',
  description: 'Zobacz wybrane realizacje dla restauracji, barów i kawiarni. Zdjęcia, filmy, strony WWW i kampanie, które wyróżniły naszych klientów.',
};

export default function RealizacjePage() {
  return <RealizacjeClient />;
}
