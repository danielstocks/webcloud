# Typography and Spacing in Software

![Two ways of spacing typography](/type-spacing.png)

<Intro>
For as long as I've been working with Software UI, the biggest source of inconsistency between design layout specification and software implementation is the interpretation of margins around typographic elements. Why is this? And how can we mitigate it?
</Intro>

Given the importance of typography in software, one would instinctively think this to be a solved problem. Surely there is an established best practice here? I've been somewhat aware of the issue but also been too lazy to properly dissect it. However, as part of my current job I'm creating a Design System that will be used by many people. I can no longer afford to ignore it.


## Design and software divide

I've rummaged the interwebz for answers, and my conclusion is that there is still a knowledge gap between design and engineering. It goes both ways. Designers coming from a background in print design/advertising with a lack of understanding of the dynamic nature of typography in software. Likewise, software engineers with a lack of understanding about design and core typography concepts, making the assumption that is already a solved problem.


## Crash course in typographic terminology

To fully understand the elements in play, here's a quick crash course in typography terminology and core concepts.

Baseline
Cap Height
Languages / Writing modes


## The problem

### The bounding box dilemma

The text bounding box contains x pixels of negative space, this space is affected by the font size (and line height?) of the text itself. 

Let's begin with a simple imaginative design to engineering handover:


> Image of "photoshop design with text + button + paragraph" with guides and w/o guides


If this is just a static image, there is no way to tell the amount of pixels between the header and the paragraph, and the button at the end. 

Most developers here will make the mistake of measuring cap-height to baseline, this isn't equivalent of the spacing between


### Software !== Print


### web, iOS, android

### design tools, figma

figma auto layout





## Solutions

### Removing the negative space


