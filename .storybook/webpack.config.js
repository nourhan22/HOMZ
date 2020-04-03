const path = require('path');

module.exports = async ({ config }) => {

  config.module.rules.push({
    test: /\.(scss|sass)$/,
    use: ['style-loader', 'css-loader', {
      loader: 'sass-loader'
    }],
    include: path.resolve(__dirname, '../')
  });

  return config;
};