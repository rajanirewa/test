/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tradable.codeandgrow.net',
            port: '',
            pathname: '/uploads/all-images/**/**',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '/**',
          }
        ],
    },
}

module.exports = nextConfig
