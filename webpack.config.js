/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",

  mode: "production",

  output: {
    filename: "[name].[chunkhash:8].js",
  },

  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
    moduleIds: "hashed",
    chunkIds: "named",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        module1: {
          test: /[\\/]src[\\/]module-1/,
          chunks: "all",
          enforce: true,
        },
        module2: {
          test: /[\\/]src[\\/]module-2/,
          chunks: "all",
          enforce: true,
        },
        common: {
          test: /[\\/]src[\\/]common/,
          chunks: "all",
          enforce: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
      },
    },
  },
};
