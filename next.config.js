// next.config.js
module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/pdf/',
              publicPath: '/_next/static/pdf/',
            },
          },
        ],
      });
    }

    return config;
  },
};
