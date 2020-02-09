# My Personal Website 2020 Tech Stack

---

<Intro>Roughly every six years or so, I set out on the seemingly meaningless expedition of re-building my personal website. This post outlines decisions and thoughts on the new architecture, as well as a reflection over what's changed since last time.</Intro>

I first launched my personal website in 2007. It's taken many forms since. From raw HTML, to PHP, to [Django](https://www.djangoproject.com/), to [Jekyll](https://jekyllrb.com/), and back to raw HTML. It's always been a fun way to explore new technology and do silly over-the-top things without justifying the cost. Who needs Medium or other proprietary blogging platforms!?

![Vintage Webcloud](/vintage-webcloud-2010.jpg "Ah, my good old 2010 vintage website in IE7, starting to feel like an old bottle of wine")

## Static Pages

In 2010 this website was statically generated with Jekyll. It took a bunch of Markdown files, processed them and spat out HTML files, later uploaded on a CDN. What felt like great tool at the time also felt somewhat novel. A good fit for my personal blog, but for "real" work? I wasn't sure.

Fast forward to 2020: Apparently what I did a decade ago is now referred to as the [Jamstack](https://jamstack.org/). Frameworks like [Next.js](nextjs.org/), [Gatsby](https://www.gatsbyjs.com/careers/) and [Hugo](https://gohugo.io/) have become the new mainstream. Companies like Netlify and ZEIT have made static site deployments easy, cheap and accessible to all. What used to be a novel way to build your blog is is now multi-million dollar business model.

### Look mum, no React on the client

For this site, I'm using Next.js to server side render React components into HTML. I'm actually **not using React.js on the client**, as I think it's completely overkill for a personal website/blog. I have few lines of "vanilla" JavaScript to progressively enhance some things like theming, but that is all.

Turns out I'm one of those weird people who thought that the biggest draw of React.js was JSX (w/ SSR), and the pioneering of componentization. It just made so much sense to me from a UI composition/structure/architectural perspective.

If anything, not having React at your disposal really makes you think twice about what functionality does the web platform offer natively out of the box. Remember CSS, HTML and browser API's???


## Content

After using raw HTML to create my blog posts for the past 6 years, I'm back to good old Markdown. Ironically this brings me back to what I used with Jekyll 10 years ago. I think any abstraction that outlives my stupid personal website re-builds is probably here to stay. Markdown has stood the test of time!

The only recent development and addition to this area is the innovation of [MDX](https://mdxjs.com/). I've been a heavy MDX user at work during the past year. Turns out it's a great way to write technical documentation as it allows you to embed JSX into your Markdown.

Slightly related to recent rise of "static site" popularisation, 2019 also turned out to be a good year for the so called [Headless CMS](https://www.smashingmagazine.com/2018/11/structured-content-done-right/) solutions. This make me happy, as a Front-End developer I've been fighting proprietary black box legacy CMSs for most of my working career.


[![Serverless Server side Rendering](/serverless-ssr.jpg "Serverless Server Side Rendering As a Service - SSSRaaS. It's a joke... or is it?")](https://twitter.com/KrijnHoetmer/status/1071010569438838786)


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

This essentially means that you can inline exactly the CSS needed to render a specific page, and that no CSS property will ever be declared twice. No unused properties, no duplication. What used to be a pretty hard obstacles like "inline critical CSS required to render above the fold" or 2 MB CSS files are now history.

Turns out [Facebook is doing something similar](https://twitter.com/adamwathan/status/1123705771995410432?s=12) to this. Disclaimer: while conceptually similar, I'm not convinced by the so called Utility First CSS frameworks like [Tailwind](https://tailwindcss.com/) or [Tachyons](http://tachyons.io/). Why learn a new abstraction when I already know CSS?

### Theming

One thing I wanted for the new site was to let the user pick a preferred color scheme. A light mode or a dark mode (yes I know this is old news). But how could that be done with pre-rendered static HTML pages, no React on the client, and no back-end?

The answer to that is a piece of inline render-blocking "vanilla" JavaScript in the document `<head>` and the power of [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). I'll do a follow up post on that shortly!


## Analytics

![Google Analytics Data](/ga-10-years.jpg "Ten years of Google Analytics visitor data. Yes folks, I was killing it back in 2012 :D")

In all fairness, Google Analytics is a really sophisticated product, and it's free. It's really hard justifying not to use it. I've used it for almost 10 years now both privately and at work. For the sake of learning new tools and exploration, I've opted to go for something else this time. I was mainly looking at three criterias:

1. Simpler/more lightweight, GA is overkill for what I need.
2. Non privacy-invasive
3. Support small bussiness, break big tech monolopy!

I ended up going with <SponsoredLink href="https://referral.simpleanalytics.com/daniel-stocks">Simple Analytics</SponsoredLink>. I've had a great experience so far and even got help from the founder setting up DNS CNAME records to serve the analytics script from my own domain.



## Deployment

Up until now I've been using GitHub pages to deploy this site, and 6 year ago it was by far the simplest way to hook up a Git repository to a static site deploy. It's *incredible* how much these services have matured since. We now have the likes of [Netlify](netlify.com), [Firebase](https://firebase.google.com/) and [ZEIT Now](https://zeit.co/home), only to name a few. And for personal use, they are all free!

I ended up using Zeit Now, because they offer more configurability out of the box. As a bonus they fixed an issue/bug in their server software [that I reported on GitHub](https://github.com/zeit/now/issues/3731) and deployed the fix in less than 48 hours. Consider me impressed.





### Static sites (on steroids)

One really powerful concept that most static site hosting providers now offer out of the box are URL rewrites. This allows you to essentially proxy requests to other domains. The simplicity of this really blew me away. I remember I used to have to configure and setup NGINX or other proxy services to do stuff like this. Now all I have to do is create a JSON file.

```json
{
  "rewrites": [
    { "source": "/about", "destination": "/about-our-company.html" },
    { "source": "/resize/:width/:height", "destination": "/api/sharp" },
    { "source": "/user/:id", "destination": "/api/user" },
    { "source": "/proxy/(.*)", "destination": "https://example.com/$1" }
  ]
}
```


## Long term maintenance

The last thing I want to do is to have to spend a lot of time maintaining my personal website. For this rewrite I got a great deal of inspiration from Jeff Huangs excellent article: [This Page is Designed to Last](https://jeffhuang.com/designed_to_last/)

Looking back at the old site: The main pain point throughout the years was fixing occasionally breaking 3:rd party JavaScript plugins: Namely Disqus and JSFiddle embeds. So, I got rid of those.


## In summary

Are you wondering how all of this looks ties together? Have a look at the [Git source repository](https://github.com/danielstocks/webcloud/) that powers this site.

I'm looking forward to rebuild my site again 2030! So long folks!

