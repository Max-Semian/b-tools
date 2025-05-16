/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/b-tools',
  assetPrefix: '/b-tools/',
  output: 'export',
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

      // Now it's safe to set the property
      config.optimization.splitChunks.cacheGroups.enhance = {
        test: /enhance\.ts$/,
        name: 'enhance',
        chunks: 'all',
        enforce: true,
      };
    }
    return config;
  }
};

export default nextConfig;