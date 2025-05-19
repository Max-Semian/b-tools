/** @type {import('next').NextConfig} */
const nextConfig = {
  // Условная настройка basePath и assetPrefix
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/b-tools',
    assetPrefix: '/b-tools/',
  } : {}),
  
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore all ESLint errors during build
  },
  transpilePackages: ['next-image-export-optimizer'],
  env: {
    nextImageExportOptimizer_imageFolderPath: 'public/images',
    nextImageExportOptimizer_exportFolderPath: 'out',
    nextImageExportOptimizer_quality: '75',
    nextImageExportOptimizer_storePicturesInWEBP: 'true',
    nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
    nextImageExportOptimizer_generateAndUseBlurImages: 'true',
    nextImageExportOptimizer_remoteImageCacheTTL: '0',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure the necessary objects exist
      config.optimization = config.optimization || {};
      config.optimization.splitChunks = config.optimization.splitChunks || {};
      config.optimization.splitChunks.cacheGroups = config.optimization.splitChunks.cacheGroups || {};
    }
    return config;
  }
};

export default nextConfig;