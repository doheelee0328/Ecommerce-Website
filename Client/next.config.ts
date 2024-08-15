import type { NextConfig } from 'next'
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
}

module.exports = withPlugins([withCSS], {
  // Your Next.js config
})

export default nextConfig
