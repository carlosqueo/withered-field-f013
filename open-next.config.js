/** @type {import('@opennextjs/cloudflare').Config} */
const config = {
  buildCommand: 'next build',
  buildOutputPath: '.next',
  outputPath: '.open-next',
  // Deshabilitar la generación de manifiestos de cliente para rutas estáticas
  staticPageGenerationTimeout: 120,
  // Configuración específica para Cloudflare
  runtime: {
    name: 'cloudflare',
    config: {
      build: {
        command: 'next build',
        cwd: '.',
      },
    },
  },
};

module.exports = config; 