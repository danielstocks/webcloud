# Server-side Only React with Next

---

<Intro>
A commonly heard critique of React is that it's a heavy handed or over-engineered framework, that for many websites provides little or no added benefit. As an experiment, I removed React from my website... on the client-side.
</Intro>

You know that feeling you get sometimes that *the web* is broken?

You visit a seemingly simple website with little or no interactivity, yet somehow it sends you 2 MB of JavaScript to digest. You're half way down the article that you're reading and suddenly: client-side rendering kicks in, resets everything. You try to find your way back but the page is now janking around. Your mobile device is brought to a crawl and behaving like it's taking its last dying breath. You end up rage quitting and screaming: THE WEB IS BROKEN, as your colleagues look worryingly in your direction.


[![Netflix talk React SSR](/netflix-react-ssr.jpg "The UI Engineers over at Netflix created a Twitter storm while doing similar experiments back in 2017, but for slightly other purposes than mine.")](https://twitter.com/NetflixUIE/status/923374215041912833)


In spite of all this, when I re-built my personal website (for the n:th time) I made the decision to use [React](https://reactjs.org/) and [Next](https://nextjs.org/)! Am I a hypocrite? (you decide for yourself).

## Why Next + React for a Blog?

Even if I didn't intend on using React on the client-side, I still wanted to use it on the server for the following reasons:

- I wanted to write blog posts in Markdown, so I needed something to convert Markdown to HTML. [MDX](https://mdxjs.com/) (Markdown + JSX) enabled me to transform Markdown into custom React Components.

- React aside, I really like organizing code around the component mental model. I wasn't keen on going back to string based templates and CSS preprocessors (looking back at my old Gulp/Grunt files can trigger nightmares).

- There's a bunch of great JavaScript libraries I want to use server side, for [date-formatting](https://date-fns.org/), code [syntax highlighting](https://prismjs.com/) etc. Having a Node.js compatible application framework allows me to do that.

- Next has a truly great developer experience that allows me to leverage what I already know about React and is highly configurable. Simply drop js and md files into a _pages/_ and you're ready to go.

### Other options considered?

I did try [Gatsby](https://www.gatsbyjs.org) and it's great, but I felt it was too much of a black box, and I have no idea what's going on under the hood. I also tried rolling my own minimal setup with MDX and Reacts `renderToString`, but I found myself simply re-inventing Next. In the past I've also tried [Jekyll](https://jekyllrb.com/) and [Hugo](https://gohugo.io/). I found that both work great out of the box, but were hard to customize as I'm not very fluent in either Ruby or Go.

The other option I did consider was the plain vanilla ice-cream flavour. Simple, no build step, no Markdown, only plain HTML, JS and CSS files. This was tempting. I usually opt for this if the project allows it. The downside being that as soon as you want to do anything fancy like component re-use or refactoring it quickly gets messy and hard to maintain.

## What's _Next?_

Next is a multi-purpose React application framework, but for my purposes it's mainly a static site generation tool (comparable to Jekyll or Gatsby). It takes an input (Markdown in my case) and spits out a bunch of HTML files that are later deployed on a CDN. No server-side runtime required.

### Next is great for universal websites

Websites built with Next are isomorphic/universal out of the box. That means that most of the JavaScript you write is run on the server, but also automatically bundled, tree-shaken, split into small modules and shipped to the client. This allows you to seamlessly pre-render your JavaScript application on the server, and add interactivity on the client without any extra configuration.

### The Elephant In the Room: 453kB of JavaScript

So what's the problem? Ladies and Gentlemen, this is a blog. It's a one way communication channel with little or no interactivity. Most people read one article and then leave, and that's OK.

For the tiny amount of interactivity that this site offers there is simply no way I could justify sending you 453kb of JavaScript that simply "re-renders" the page on the client.

![Client Side Bundle](/client-side-bundle.jpg "What are you saying? All of this JavaScript? For no value!?!")

## Part 2: Killing the Elephant

<Disclaimer>Disclaimer: no animals were harmed during this experiment</Disclaimer>

What I like about Next is that you can heavily customize it. I've done so to an extent that there's no notion of the Next runtime or traces of it in the statically generated HTML.

What I've done here is to remove all client-side JavaScript and extra markup that Next outputs. This is how:

### Create a Custom Head Component

One option is to just use a normal HTML `<head>` element here. However, extending the Next Head component will allows us to inject a `<title>` from any component or page, this is useful.

```jsx
import { Head } from "next/document";
class MyHead extends Head {
  render() {
    let { head } = this.context._documentProps;
    let children = this.props.children;
    return (
      <head {...this.props}>
        {children}
        {head}
      </head>
    );
  }
}
```

### Create a Custom Main Component

This is not really necessary but to satisfy my OCD I wanted to get rid of the `<div id="next">` wrapper around my content.

```jsx
import { Main } from "next/document";
export class MyMain extends Main {
  render() {
    const { html } = this.context._documentProps;
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
}
```

### Stitching it together: Custom Document

Customizing the `pages/_document.js` is quite common, only we're going to do it slightly differently. The key here is that we omit the `<NextScript/>` component and keep things as slimmed down as possible

```jsx
import Document from "next/document";
export default class extends Document {
  render() {
    return (
      <html lang="en">
        <MyHead>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </MyHead>
        <body>
          <MyMain />
        </body>
      </html>
    );
  }
}
```

For brevity, I've left out the CSS-in-JS parts in the example above, I'll leave that for another article.

### End Result

With this bare bone setup we get the following HTML output:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta charset="utf-8" />
    <title>webcloud</title>
  </head>
  <body>
    <div>Welcome to my no JavaScript Next page</div>
  </body>
</html>
```

The end result is pretty cool. I get a HTML page that is server-side rendered with React, generated from a Markdown file. Things like code syntax highlighting is done on the server, so need need for a client-side runtime.

I'm using [Fela](http://fela.js.org/) for CSS-in-JS so that the critical amount of CSS needed to render a specific page is inline directly in the head. This means a HTML page that is entirely self-contained, no external CSS or JavaScript files required, only a single request!

### Bonus: Adding client-side JavaScript back in the mix

OK I lied, this page is not entirely JavaScript free. You may have noticed that I have a dark/light theme switching button in the top right corner. To achieve this I've added roughly 0.5kB of render blocking JavaScript that detects the users OS color preference, and modified CSS global properties before the page is rendered. I will write an article about that soon!

### Bonus: Getting back that "SPA" feeling

One thing that _is_ nice with client side applications is that navigating between pages is more or less instant. This is not huge problem for me, as most of my content is long form, and I don't expect my visitors to be doing a lot of navigation between pages. Regardless, I still wanted to find a way to enhance perceived navigational performance without introducing too much complexity.

To achieve this I added a small script called [instant.page](https://instant.page/) (1 kB). It uses just-in-time preloading — it preloads a page right before a user clicks on it.

### To do: Opt out of client-side bundling build step

One thing that I haven't figured out yet is how to make Next not build the client side bundle on deploy. The cost of this will grow over time as I get more and more markdown pages, but right now the entire site builds in less than 10 seconds so it's not really an issue.

## Summary

This was an experiment, and while I'm relly happy with the result I wouldn't advise people to build a website using this method. For my specific project and purpose it's been a good fit. Most important of all I had a lot of fun while doing it and learned quite a few things about Next!

If you're interested in learning how everything fits together you can check out the [source code](http://github.com/danielstocks/webcloud) for my website on GitHub

Lastly I want to thank you [Robin](https://weser.io/) and [Geries](https://www.gtothesquare.com/) for reviewing this article prior to publishing.
