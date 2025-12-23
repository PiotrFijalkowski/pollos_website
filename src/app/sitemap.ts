import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pollos.pl';

  // Define all static routes
  const routes = [
    '',
    '/dla-kogo',
    '/faq',
    '/kontakt',
    '/o-firmie',
    '/realizacje',
    '/uslugi',
    '/uslugi/kampanie-reklamowe',
    '/uslugi/pakiety',
    '/uslugi/social-media',
    '/uslugi/strony-internetowe',
    '/uslugi/zdjecia-i-filmy',
    '/wiedza',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
