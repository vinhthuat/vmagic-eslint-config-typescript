// eslint-disable-next-line @typescript-eslint/no-var-requires
const restrictedGlobals = require(
  'confusing-browser-globals',
)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettier = require(
  './.prettierrc',
)

exports.prettier = prettier

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  plugins: [
    'import',
    'simple-import-sort',
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['off'],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'object-property-newline': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 1,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 1,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 1,
        },
      },
    ],
    semi: [
      'error',
      'never',
    ],
    'prettier/prettier': 'off',
    'spaced-comment': [
      'error',
      'always',
    ],
    'no-mixed-spaces-and-tabs': [
      'error',
      'smart-tabs',
    ],
    'array-element-newline': [
      'error',
      'consistent',
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-tabs': [
      'error',
      {
        allowIndentationTabs: true,
      },
    ],
    indent: [
      'error',
      2,
    ],
    'no-restricted-globals': ['error'].concat(
      restrictedGlobals,
    ),
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-extraneous-class': ['off'],
    '@typescript-eslint/strict-boolean-expressions': [
      'off', // turn on in the furute
      {
        ignoreRhs: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['warn'],
    '@typescript-eslint/consistent-type-assertions': ['off'],
    // Optional chaining when accessing prototype
    // method inside useCallback and useMemo
    // https://github.com/facebook/react/pull/19062
    'react-hooks/rules-of-hooks': ['error'], // Checks rules of Hooks
    'react-hooks/exhaustive-deps': ['warn'], // Checks effect dependencies
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-redeclare': ['off'],
    '@typescript-eslint/triple-slash-reference': ['off'],
    '@typescript-eslint/restrict-plus-operands': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['warn'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/promise-function-async': ['off'],
    '@typescript-eslint/no-var-requires': ['warn'],
    '@typescript-eslint/no-misused-promises': ['off'],
    '@typescript-eslint/restrict-plus-operands ': ['off'],
    '@typescript-eslint/prefer-readonly': ['off'],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true,
        ignoreComments: false,
      },
    ],
    'function-call-argument-newline': [
      'error',
      'consistent',
    ],
    'function-paren-newline': [
      'error',
      'multiline-arguments',
    ],
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'react/jsx-uses-react': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'no-duplicate-imports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          [
            '^react',
            '^\\w',
            '^@?\\w',
          ],
          // Internal packages.
          [],
          // Local import
          ['^@/.*|$'],
          // Parent imports. Put `..` last.
          [
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
          ],
          // Other relative imports. Put same-folder imports and `.` last.
          [
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
          ],
          // Style imports.
          ['^.+\\.s?css$'],
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
    'newline-before-return': 1,
    'prefer-const': 1,
  },
  env: {
    es6: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
