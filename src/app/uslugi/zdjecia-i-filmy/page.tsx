import type { Metadata } from 'next';
import PhotoVideoClient from './PhotoVideoClient';

export const metadata: Metadata = {
  title: 'Zdjęcia i Filmy | Pollos - Content Marketing dla Gastronomii',
  description: 'Sesje zdjęciowe wnętrz i potraw, produkcja rolek na Instagram i TikTok. Profesjonalne materiały wideo dla Twojej restauracji.',
};

export default function PhotoVideoPage() {
  return <PhotoVideoClient />;
}
