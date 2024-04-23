# webcloud

This is the source code for my personal website, blog & playground.
You can read about what/why/how/where the site was built in [this blog post](https://webcloud.se/blog/2020-02-02-personal-website-2020-tech-stack/)

## TLDR

Here's a shortlist of tools, libraries and services used to build this website.

### Development

- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- [React](https://reactjs.org/) - Server side only (SSR)
- [Next.js](https://nextjs.org/) - Static site generation (SSG)
- [MDX](https://mdxjs.com/) - Markdown + JSX
- [date-fns](https://date-fns.org/) - JavaScript date utility library
- [Fela](http://fela.js.org/) - State-driven atomic CSS styling in JavaScript
- [UglifyJS](http://lisperator.net/uglifyjs/) - Minifier for client-side ES5 vanilla JavaScript code
- [Prism](https://prismjs.com/) & [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) - Syntax highlighting for code examples
- [instant.page](https://instant.page/) - Uses just-in-time preloading — it preloads a page right before a user clicks on it.

### CI/CD

- [GitHub Actions](https://github.com/features/actions) - CI Workflows & Runners
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) - Web Performance & QA testing
- [Percy](https://percy.io/) - Visual regression testing

### Deployment

- [Zeit Now](https://zeit.co/home) - Zero config static site deployments, reverse proxy & CDN

### Misc

- [Simple Analytics](https://simpleanalytics.com/) - Like Google Analytics, but simple
