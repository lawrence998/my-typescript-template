// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    env: { es6: true },
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    serviceworker: true
  },
  {{#if_eq lintConfig "standard"}}
  plugins: ['vue', '@typescript-eslint'],
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // extends: 'standard',
  extends: ['plugin:vue/base', 'plugin:@typescript-eslint/recommended', 'plugin:vue/essential', 'standard'],
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  rules: {
    {{#if_eq lintConfig "standard"}}
    // allow async-await
    // 'generator-star-spacing': 'off',
    // 设置默认eslint规则
    'one-var': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    // 'no-debugger': 0,
    'no-console': 0,
    semi: [2, 'always'],
    'no-extra-semi': 2,
    'space-before-function-paren': 0,
    eqeqeq: 0,
    'spaced-comment': 0,
    'no-useless-escape': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'new-cap': 0,
    camelcase: 0,
    'no-new': 0,
    indent: 'off',
    semi: 'off',
    // 设置typescript-eslint规则
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 0,
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
