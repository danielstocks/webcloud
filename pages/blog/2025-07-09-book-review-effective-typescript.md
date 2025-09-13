# Book Review: Effective TypeScript

---

<Intro>
TypeScript is a powerful but complex language. As I was about to start a major TypeScript project at work, I realised I needed a deeper understanding of how to use it effectively. To prepare, I recently read <em>Effective TypeScript</em> — here are my thoughts on it.
</Intro>

## About the book

The book is written by [Dan Vanderkam](https://www.danvk.org/) who most notably worked at Google. He's also the author of a few popular open-source projects that can be found on his [GitHub](https://github.com/danvk). I hadn’t heard of him before, but with the first edition of the book published in 2019, he's most likely been writing TypeScript longer than most of us!

<div>
  <InlineImage 
    style={{ float: "left", maxWidth: "120px", margin: "0 24px 24px 0", boxShadow: "var(--shadow)" }} 
    src="/effective-typescript-book-cover.jpg"
  />
  <p style={{ marginBottom: "24px" }}>
The book has a <a href="https://effectivetypescript.com/">companion website</a> that shares some of the content as blog posts, along with a <a href="https://github.com/danvk/effective-typescript">GitHub repository</a> containing the code samples. The code samples are also linked to the TypeScript playground which is a nice added touch!
  </p>

  <p>
The second edition was published in 2024, five years after the first. Dan mentions that much has changed since 2019 as TypeScript has matured and begun to stabilize. With this update, he hopes the material will remain relevant for longer. The book includes a substantial appendix addressing the differences between the first and second edition. I already spotted a few potential revisions that could be made due to advancements in tools (like Node.js being able to strip types from .ts files) and it's only 2025. Still, I think most of the material should age well.
</p>

</div>

## How I read it

I've read the <SponsoredLink>Kindle version of the book</SponsoredLink> on my Kindle. It's 674 pages long, divided into ten chapters, consisting of 83 self contained topics (items, as the book calls them) in total. It's worth noting that there are <em>571 pages</em> if you only count the chapters. The rest is supplementary material such as the appendix and index. Below is a visualization of the chapters and their relative length, to give a sense of how the material is distributed.


<div style={{ display: "flex", width: "100%", height: "24px", fontSize: "12px", margin: "24px 0", 
textShadow: "0px 0px 1px var(--color-bg-alt)", fontWeight: "bold" }}>
  <div title="Chapter 1" style={{ flex: "0 0 7.18%", background: "#976fcaff", display: "flex", justifyContent: "center", alignItems: "center" }}>1</div>
  <div title="Chapter 2" style={{ flex: "0 0 17.51%", background: "#2a9d8f", display: "flex", justifyContent: "center", alignItems: "center" }}>2</div>
  <div title="Chapter 3" style={{ flex: "0 0 12.96%", background: "#e76f51", display: "flex", justifyContent: "center", alignItems: "center" }}>3</div>
  <div title="Chapter 4" style={{ flex: "0 0 13.13%", background: "#f4a261", display: "flex", justifyContent: "center", alignItems: "center" }}>4</div>
  <div title="Chapter 4" style={{ flex: "0 0 8.41%", background: "#457b9d", display: "flex", justifyContent: "center", alignItems: "center" }}>5</div>
  <div title="Chapter 5" style={{ flex: "0 0 12.61%", background: "#8ab17d", display: "flex", justifyContent: "center", alignItems: "center" }}>6</div>
  <div title="Chapter 6" style={{ flex: "0 0 5.95%", background: "#e9c46a", display: "flex", justifyContent: "center", alignItems: "center" }}>7</div>
  <div title="Chapter 7" style={{ flex: "0 0 6.30%", background: "#ef476f", display: "flex", justifyContent: "center", alignItems: "center" }}>8</div>
  <div title="Chapter 8" style={{ flex: "0 0 10.51%", background: "#118ab2", display: "flex", justifyContent: "center", alignItems: "center" }}>9</div>
  <div title="Chapter 9" style={{ flex: "0 0 5.43%", background: "#7061bbff", display: "flex", justifyContent: "center", alignItems: "center" }}>10</div>
</div>

- <div id="chapter-1">Chapter 1. <em>Getting to know TypeScript</em> (41 pages)</div>
- Chapter 2. <em>TypeScript’s Type System</em> (100 pages)
- Chapter 3. <em>Type Inference & Control Flow</em> (74 pages)
- Chapter 4. <em>Type Design</em> (75 pages)
- Chapter 5. <em>Unsoundness and the any Type</em> (48 pages)
- Chapter 6. <em>Generics and Type-Level Programming</em> (72 pages)
- Chapter 7. <em>TypeScript Recipes</em> (34 pages)
- Chapter 8. <em>Type Declarations and @types</em> (36 pages)
- Chapter 9. <em>Writing and Running Your Code</em> (60 pages)
- Chapter 10. <em>Modernization and Migration</em> (31 pages)

Typical read time according to Amazon Kindle is 13 hours and 29 minutes. In real life, it took me two months of occasional reading, usually a few items at a time. I took the time to absorb the material thoroughly and took notes for each item (ended up with about 50 handwritten pages in my notebook).

## What did I expect

I've been using TypeScript professionally for a few years. I've been using it mainly in React and Next.js projects. Until recently, I had only learned just enough to get by and never really studied the language in depth. As I was embarking on a large rewrite project at work, migrating a huge codebase from another language to TypeScript I realised I needed a better understanding of how to use it effectively. That's when I came across Effective TypeScript and decided to pick it up!

The book clearly states it doesn’t try to be a reference manual. Instead it’s more like: here are five different ways to solve something, but which one should you actually use, and why? I’ve already read a bunch of reference material, and the TypeScript handbook covers that side really well. What I was missing was the practical guidance, and that’s exactly what this book promised to give me.


## So what did I think of it?

- I really liked the format. Each item reads fairly short and covers self-contained topic It does a good job of cross referencing other items when needed, which is helpful for when you haven't had the time to read for a few days but quickly want to get up to speed.

- I especially enjoyed the chapters about creating a mental model around how to think about TypeScript in relation to JavaScript. Even if I had a rough idea about this, it's something that I've been struggling to articulate clearly and explain to others new to TypeScript.

- Although I enjoyed most of the content, I think it was a bit lengthy. Maybe it says more about TypeScript (that you need over 600 pages to teach you how to use it effectively) than the book itself.

- At times the book leans more into writing good, idiomatic JavaScript. That’s obviously closely related to writing effective TypeScript, but personally I found it a bit off-topic compared to what I was hoping to get from the book.

- If you’re coming from a functional or other strongly typed language, a lot of the content will instantly make sense: Sound Types, Pattern matching, Exhaustiveness checks, and opaque or branded types. I thought the chapter on TypeScript’s soundness was especially good in this regard. Elsewhere it sometimes left me wanting more explanation of why these functional-style constructs exist and why you should use them.

- This is nitpicking, but sometimes I felt that advice given was backed by arguments like: "this is convention", or "this is considered bad practice" but didn't provide further explanation. A few examples in particular: When to use `type` vs `interface`, why to avoid `T_*` or `I_*` prefixes in naming types, and preferring `const fn = () => {}` expressions over `function fn()` declarations.


## Summary

I learned a lot from this book! It also challenged some of my existing thinking and mental modal around how to think about TypeScript which I think will make me use the language more effectively.

I come from a background with solid understanding of JavaScript & Web development, so there was a bit of repetition in that area for me, and I felt the book could have been more concise. Some of the advice given felt subjective to me, and urged me to cross-check them against other sources. That said, I now feel far more confident when working with complex TypeScript types, and I have a clearer mental model for how to use the language effectively.

So am I an expert now? Not by far, but thanks to this book I'm definitely not a beginner anymore.