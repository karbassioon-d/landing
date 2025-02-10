/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve = {
          ...config.resolve,
          fallback: {
            fs: false,
            path: false,
            process: false,
          },
        };
      }
      return config;
    },
    transpilePackages: ['react-tsparticles', 'tsparticles'],
  };
  
  export default nextConfig;
  