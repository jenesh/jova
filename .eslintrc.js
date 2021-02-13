module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier/react",
        "plugin:prettier/recommend"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict":true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        'prettier/prettier': ['error'],
        'global-require': 0,
        'linebreak-style': [2, 'unix'],
        'prefer-const': 0,
        'no-console': [
          'warn',
          {
            allow: ['warn', 'error', 'log', 'info', 'disableYellowBox'],
          },
        ],
        'no-param-reassign': ['error', { props: false }],
        'no-restricted-globals': 0,
        'no-unused-vars': 0,
        'no-use-before-define': 0,
        'no-underscore-dangle': 0,
        'no-useless-constructor': 0,
        'no-unused-expressions': 0,
        'no-plusplus': 0,
        'no-nested-ternary': 0,
        'lines-between-class-members': [
          1,
          'always',
          {
            exceptAfterSingleLine: true,
          },
        ],
        'prefer-destructuring': [
          2,
          {
            array: false,
            object: true,
          },
        ],
        'max-classes-per-file': 0,
        'import/prefer-default-export': 0,
        'react/prefer-stateless-function': 0,
        'react/destructuring-assignment': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-filename-extension': [
          2,
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
        'jsx-a11y/accessible-emoji': 0,
      },
};
