/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Asegurarse de que los archivos estáticos se generen correctamente
  distDir: '.next',
  // Configuración específica para Cloudflare
  images: {
    unoptimized: true,
  },
  // Deshabilitar la generación de manifiestos de cliente para rutas estáticas
  experimental: {
    optimizeCss: true,
  }
};

export default nextConfig;
