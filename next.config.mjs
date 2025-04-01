/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Asegurarse de que los archivos estáticos se generen correctamente
  distDir: '.next',
  // Configuración específica para Cloudflare
  images: {
    unoptimized: true,
  },
  // Configuración de optimización
  experimental: {
    // Deshabilitar la generación de manifiestos de cliente
    serverActions: {
      allowedOrigins: ['*'],
    },
    // Optimizar importaciones de paquetes
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // Configuración de compilación
  webpack: (config, { isServer }) => {
    // Configuración específica para el cliente
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: false,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  }
};

export default nextConfig;
