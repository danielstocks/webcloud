# My Personal Website 2020 Tech Stack

---

<Intro>Roughly every six years or so, I set out on the seemingly meaningless expedition of re-building my personal website. This post outlines decisions and thoughts on the new architecture, as well as a reflection over what's changed over time.</Intro>

I first launched my personal website in 2007. It's taken many forms since. From raw HTML, to PHP, to [Django](https://www.djangoproject.com/), to [Jekyll](https://jekyllrb.com/), and back to raw HTML. It's always been a fun way to explore new technology and do silly over-the-top things without justifying the cost!

## Static Pages

In 2010 this website was statically generated with Jekyll. It took a bunch of Markdown files, processed them and spat out a bunch of HTML files that we're uploaded on a CDN. What felt like great tool at the time also felt somewhat novel. A good fit for my personal blog, but for "real" work? I wasn't sure.

Fast forward to 2020: Apparently what I did a decade ago is now referred to as the [Jamstack](https://jamstack.org/). Frameworks like [Next.js](nextjs.org/), [Gatsby](https://www.gatsbyjs.com/careers/) and [Hugo](https://gohugo.io/) have become the new mainstream. Companies like Netlify and ZEIT have made static site deployments easy, cheap and accessible to all. What used to be a novel way to build your blog is is now multi-million dollar business model.

### Look mum, no React on the client

For this site, I'm using Next.js to server side render React components into HTML. I'm actually **not using React.js on the client**, as I think it's completely overkill for a personal website/blog. I have few lines of "vanilla" JavaScript to progressively enhance some things like theming, but that is all.

Turns out I'm one of those weird people who thought that the biggest draw of React.js was JSX (w/ SSR), and the pioneering of componentization. It just made so much sense to me from a UI composition/structure/architectural perspective.

Many people like to complain how React has "bloated" the web and adding complexity and unnecessary abstraction to simple problems. To some extent I agree but I would argue that the "jQuery plugin" era that preceded React was equally bad in terms of bloat.

## Content

After using raw HTML to create my blog posts for the past 6 years, I'm back to good old Markdown. Ironically this brings me back to what I used with Jekyll 10 years ago. I think any abstraction that outlives my stupid personal website re-builds is probably here to stay. Markdown has stood the test of time!

The only recent development and addition to this area is the innovation of [MDX](https://mdxjs.com/). I've been a heavy MDX user at work during the past year. Turns out it's a great way to write technical documentation as it allows you to embed JSX into your Markdown.

Slightly related to recent rise of "static site" popularisation, 2019 also turned out to be a good year for the so called [Headless CMS](https://www.smashingmagazine.com/2018/11/structured-content-done-right/) solutions. This make me happy, as a Front-End developer I've been fighting proprietary black box legacy CMS's for most of my working career.

## Styling & Theming

In conjunction with the rise of React and other JavaScript UI frameworks we've also seen the rise of CSS-in-JS libraries. This has been a point of much controversy over the past few years.

I've played around with most of them (eg. Styled Components) but the one that stuck with me was [Styletron](https://www.styletron.org/), and later [Fela](http://fela.js.org/). They both implement the concept of [Atomic/Virtual CSS](https://ryantsao.com/blog/virtual-css-with-styletron).

```jsx
<div css={{ color: "red", background: "blue", padding: "20px" }}>
  <div css={{ color: "blue", background: "red" }}>Hello</div>
</div>
```

Outputs the following CSS:

```css
.a { color: "red"; }
.b { background: "blue"; }
.c { padding: "20px"; }
```

This essentially means that you can inline exactly the CSS needed to render a specific page, and that no CSS property will ever be declared twice. No unused properties, no duplication. What used to be a pretty hard obstacles like "inline critical CSS required to render above the fold" or 2MB CSS files are now history.


### Theming

One thing I wanted for the new site was to let the user pick a preferred color scheme. A light mode or a dark mode (yes I know this is old news). But how could that be done with pre-rendered static HTML pages, no React on the client, and no back-end?

The answer to that is a piece of inline render-blocking "vanilla" JavaScript in the document `<head>` and the power of [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). I'll do a follow up post on that shortly!


## Analytics

Out with GA, in with SA

## Deployment

Zeit NOW, mentioned netlify.

Rid of GH pages.

## Maintenance

Get rid of 3:Rd party js.

## View Source

Are you wondering how all of this looks ties together? Have a look at the [Git source repository](https://github.com/danielstocks/webcloud/) that powers this site.


## In summary

I'm looking forward to rebuild my site again 2030! So long folks!

