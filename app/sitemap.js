const BASE_URL = 'https://livephoneanswering.com'

const ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/virtual-receptionist', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/medical-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/hipaa-compliant-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/after-hours-answering-service', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/appointment-scheduling', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/industries-served', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/how-it-works', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/thank-you', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap() {
  const lastModified = new Date()
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
