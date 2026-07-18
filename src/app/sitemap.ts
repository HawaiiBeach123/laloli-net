import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.laloli.net';

// TODO: add entries here as hidden pages go live
// (/programs, /events, /news, /gallery, /team, /volunteer)
const livePages = [
  { path: '', priority: 1.0 },
  { path: '/about', priority: 0.8 },
  { path: '/donate', priority: 0.9 },
  { path: '/contact', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return livePages.map(page => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page.priority,
  }));
}
