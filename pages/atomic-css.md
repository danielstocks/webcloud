28 November 2019


# Functional <br />Utility-First CSS

I always felt that the so-called Utility CSS frameworks like
[Tailwind](https://tailwindcss.com/) and [Tachyons](https://tachyons.io/) were novel ideas. At first glance they made a lot of sense to me, but for practical reasons I ended up never using them. Regardless, they pioneered the concept of [Atomic CSS](https://css-tricks.com/lets-define-exactly-atomic-css/) which I believe still has merit in a functional context.

Utility classes in CSS like `.hide { display: none }` is nothing new. I've seen them used by developers in almost every company I've worked with during the past 10 years. The **Utility-First** CSS philosophy however (all styling is derived from atomic class names), is a slightly more controversial topic.

This is not about the usual back and forth
[arguing](https://news.ycombinator.com/item?id=21553496) on separation of concerns.
I've already bought into the React philosophy of componentization, so I'm fine with
the idea of [mixing CSS, JavaScript and markup](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/). This is _not_ to imply that I'm an advocate of inlining CSS or JavaScript using the `style` or event handlers (eg. `onclick`) directly on HTML elements, that's a different story.

## What I like about Utility-First CSS

- No globals or unintended side-effects.
- Easy refactoring, no CSS cleanup required after deleting markup
- I don't have to think about or enforce CSS naming conventions and file structure.
- Easier to programmatically extract styles required to render a specific page and therfor making previously near impossible tasks such as "automation of inlining critical CSS to render above the fold" fairly trivial. (more on this later)

The arguments above also applies to most CSS-in-JS frameworks but there are two unique benefits to Utility-First CSS:

1. A style property is only declared once, and can be-reused across components. Resulting in non-growing stylesheets.
2. No JavaScript required, Zero runtime dependencies. Use with any front-end JS framework.

## What could be better?

With all the benefits previously mentioned, why do I disapprove of Utility CSS Frameworks? This is only about my own shortcoming. You see, I want to build scalable, accessible and performant web UI, but I'm **lazy**.

### Learning a new abstraction

In my experience class names in Utility CSS frameworks like Tailwind are semantic, brief and generally easy to understand. With that being said, I still find myself having to look up what they translate to. The Tailwind docs are very well written and comprehensible but I feel I'm forced to re-learn something I already know.

```html
<!-- Example from Tailwind docs -->
<form>
  <input class="bg-gray-200 hover:bg-white hover:border-gray-300
    focus:outline-none focus:bg-white focus:shadow-outline
    focus:border-gray-300 ...">
  <button class="bg-teal-500 hover:bg-teal-600
    focus:outline-none focus:shadow-outline ...">
    Sign Up
  </button>
</form>
```

### Optimizing for production

Given that Utility-CSS frameworks have to re-implement every single style abstraction the raw unoptimized CSS file will be [very big](https://tailwindcss.com/docs/controlling-file-size/), and not so great for performance.

To mitigate this, frameworks like Tailwind provide a build step that will allow you to figure out exactly
what parts of the CSS utility abstraction you're using, and only cherry pick
those classes to create a production optimized build. This unfortunately is a configuration that will have to be actively maintained.

### Dealing with state



## Functional Utility-First CSS

What if there was a way to to just write plain CSS and automate the whole process?

Fela is a small, high-performant and framework-agnostic toolbelt to handle state-driven styling in JavaScript.
It is dynamic by design and renders your styles depending on your application state.
As explained by [Ryan Tsao](https://ryantsao.com/blog/virtual-css-with-styletron):

> There’s ultimately a finite number of different font sizes, widths, and colors in any given application. And in practice, for purposes of design consistency, the options are often intentionally restricted to a small set of shared values which are then repeated many times throughout the application.


TLDR For me it's either Vanilla CSS (no preprocessor or frameworks) or fully automated Atomic CSS in JS. Everything else in between feels half-baked, and to me a needless abstraction.

