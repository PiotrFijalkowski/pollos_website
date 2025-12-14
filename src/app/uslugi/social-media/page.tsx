import type { Metadata } from 'next';
import SocialMediaClient from './SocialMediaClient';

export const metadata: Metadata = {
  title: 'Social Media | Pollos - Prowadzenie Profili FB/IG/TikTok',
  description: 'Profesjonalne prowadzenie mediów społecznościowych dla gastronomii. Strategia, content, rolki i budowanie zaangażowania.',
};

export default function SocialMediaPage() {
  return <SocialMediaClient />;
}
