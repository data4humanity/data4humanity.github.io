# Data4Humanity website

This repository contains the source code for our website, [data4humanity.github.io](https://data4humanity.github.io).

## Getting started

Our website is built with [Gatsby](https://www.gatsbyjs.com/), a JavaScript framework that uses [React](https://reactjs.org/).

To install Gatsby, run

```bash
yarn install -g gatsby-cli
```

The site also requires a few additional JavaScript packages to run. To install these, run

```bash
yarn install
```

Once Gatsby and our site's dependencies are installed, the site can be previewed by running

```bash
gatsby develop
```

This will build and host the site on [localhost:8000](http://localhost:8000).

## Updating the site

The site is currently hosted on GitHub Pages from the [gh-pages](https://github.com/data4humanity/data4humanity.github.io/tree/gh-pages) branch. To deploy the site, run

```bash
yarn deploy
```

This will build the site and push its changes to this branch, which GitHub pages will then update automatically. The changes should be immediately visible after deployment.

