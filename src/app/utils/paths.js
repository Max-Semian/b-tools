// utils/paths.js
export function getImagePath(path) {
  // Remove any leading slash to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}/${cleanPath}`;
}