module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['next', 'custom'],
  plugins: ['react'],
  globals: {
    JSX: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['.next/**'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/require-default-props': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-anonymous-default-export': [2, { allowObject: true }],
    'no-unused-vars': 'off',
    'jsx-a11y/alt-text': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-case-declarations': 'off',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^next', '^@next', '^@apollo/client', '^@mui', '^dayjs', '^lodash', '^@?\\w'],
          // Internal packages.
          ['^@/'],
          // Side effect imports.
          ['^\\u0000'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\../../../../../..', '^\\../../../../..', '^\\../../../..', '^\\../../..', '^\\../..', '^\\..', '^\\.'],
        ],
      },
    ],
  },
};
