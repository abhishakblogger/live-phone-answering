const HTML_ROUTES = [
  'about-us',
  'after-hours-answering-service',
  'appointment-scheduling',
  'contact-us',
  'hipaa-compliant-answering-service',
  'how-it-works',
  'industries-served',
  'medical-answering-service',
  'pricing',
  'privacy-policy',
  'services',
  'thank-you',
  'virtual-receptionist',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...HTML_ROUTES.map((route) => ({
        source: `/${route}.html`,
        destination: `/${route}`,
        permanent: true,
      })),
    ]
  },
}

module.exports = nextConfig
