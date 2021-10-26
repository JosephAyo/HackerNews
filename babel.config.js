module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        // root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@navigation': './src/navigation',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@screens': './src/screens',
          '@assets': './public/assets',
          '@styles': './public/styles',
          '@helpers': './helpers',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
