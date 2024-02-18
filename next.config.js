/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['code.s3.yandex.net'],
  },
  experimental: {
    esmExternals: true,
    forceSwcTransforms: true
  },
  webpack: (config) => {
    // Apply babel-loader rule to both server and client bundles
    config.module.rules.push({
      test: /\.(js|jsx)$/,

      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions", "ie >= 11"]
                }
              }
            ],
            "@babel/preset-react"
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime",
            "@babel/plugin-transform-async-to-generator",
            "@babel/plugin-transform-destructuring",
            "babel-plugin-styled-components"
          ]
        }
      }
    });

    return config;
  }
};
