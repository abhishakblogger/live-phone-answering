/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: runs on Hostinger shared hosting with no Node process.
  // Redirects live in .htaccess because Next drops redirects() in export mode.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
}

module.exports = nextConfig
