module.exports = {
  root: true,
  extends: ['custom'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Related packages come first.
          ['^@nestjs', '^dayjs', '^lodash', '^@?\\w'],
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