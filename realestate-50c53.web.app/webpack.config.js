module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|svg)$/,
        use: ['file-loader']
      }
    ],
  },
};