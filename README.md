# Vue-TypeScript-Template
> A simple TypeScript CLI for scaffolding Vue.js projects.

### Installation

Prerequisites: [Node.js](https://nodejs.org/en/) (>=4.x, 6.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g vue-cli
```
### Usage

```bash
vue init SimonZhangITer/vue-typescript-template <project-name>
```

Example:

``` bash
$ vue init SimonZhangITer/vue-typescript-template my-project
```

The above command pulls the template from here, prompts for some information, and generates the project at `./my-project/`.

### Demo
> i wrote a [vue-typescript-demo](https://github.com/SimonZhangITer/vue-typescript-dpapp-demo) project for practice, it recorded how I configured it and how to use vue.js with typescript

### In Addition

#### vuex
> add `vuex` option at initialization time, it will create `src/store` folder, and it had configed, like this:

```
src
├──store
   ├──actions.ts
   ├──mutations.ts
   ├──getters.ts
   ├──types.ts
```

#### vue-class-component
> add `vue-class-componet` by default, and vue perfect support for it, it will make your code more flat and beautiful, you will like it.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

