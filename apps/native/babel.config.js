const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: path.resolve(__dirname, '../../.env.local'), // 指向 .env.local
          allowUndefined: false,
        },
      ],
    ],
  };
};
