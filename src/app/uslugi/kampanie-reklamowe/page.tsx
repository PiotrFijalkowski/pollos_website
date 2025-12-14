import type { Metadata } from 'next';
import CampaignsClient from './CampaignsClient';

export const metadata: Metadata = {
  title: 'Kampanie Reklamowe | Pollos - Meta Ads i Google Ads',
  description: 'Skuteczne kampanie reklamowe na Facebooku, Instagramie i w Google. Zwiększ ruch w lokalu i sprzedaż dzięki precyzyjnemu targetowaniu.',
};

export default function CampaignsPage() {
  return <CampaignsClient />;
}
