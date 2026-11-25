import { BLOG_POSTS } from '@/features/blog/posts'

export const dynamic = 'force-static'

const BASE_URL = 'https://livephoneanswering.com'

const ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/virtual-receptionist', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/medical-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/hipaa-compliant-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/after-hours', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/overflow-call-handling', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/lead-capture', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/call-routing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/appointment-scheduling', changeFrequency: 'monthly', priority: 0.9 },
  // { path: '/message-taking', changeFrequency: 'monthly', priority: 0.9 },
  // { path: '/order-taking', changeFrequency: 'monthly', priority: 0.9 },
  // { path: '/real-estate-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  // { path: '/franchise-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  // { path: '/hotel-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries-served', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/how-it-works', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  ...BLOG_POSTS.map((post) => ({ path: `/blog/${post.slug}`, changeFrequency: 'monthly', priority: 0.7 })),
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap() {
  const lastModified = new Date()
  // Deduplicate by path. A repeated URL in a sitemap is wasted crawl budget and
  // makes the file look broken in Search Console; this guarantees one entry per
  // route no matter how ROUTES is edited.
  const seen = new Set()
  return ROUTES.filter(({ path }) => {
    if (seen.has(path)) return false
    seen.add(path)
    return true
  }).map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
