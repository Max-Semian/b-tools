/** @type {import('next').NextConfig} */
const nextConfig = {
  // Используем функцию для определения режима
  basePath: process.env.NODE_ENV === 'production' ? '/b-tools' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/b-tools/' : '',
  
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Добавляем доменные имена для удаленных изображений
    domains: ['max-semian.github.io'],

  },
  
  // Отключаем строгий режим, который может блокировать загрузку изображений
  reactStrictMode: false,
  
  // Остальные настройки...
};

export default nextConfig;