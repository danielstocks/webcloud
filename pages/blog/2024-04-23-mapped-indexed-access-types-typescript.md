# Mapped vs Indexed Access types in TypeScript

---

<Intro>
A quick example on how to improve type checking in your TypeScript code by using a mapped type instead of an indexed access type.
</Intro>

TypeScript provides a nice level of runtime safety, well... assuming that you have `strict": true` and `"noUncheckedIndexedAccess": true` configured (now all you have to do is write code that compiles without errors :).

Here's an abstract example: Fetching a value from an object and then using the value as a key to access a value in another object, where the keys are known. As a relative newcomer to the language, I found myself writing a lot of code just to satisfy the compiler, checking for undefined values, which turned out to be unnecessary.

Here's a concrete example: Getting the opposite of a direction and translate it into something readable. My first instinct here was to reach for an [indexed access type](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html), and did the following:

```js
type Direction = "n" | "s" | "w" | "e";

const oppositeDirections: {
  [key: string]: Direction
} = {
  s: "n",
  n: "s",
  e: "w",
  w: "e"
};

const translations = {
  n: "north",
  s: "south",
  w: "west",
  e: "east"
};

let north: Direction = "n";

console.log(
  `The opposite of ${translations[north]} is ${
    translations[oppositeDirections[north]]
  }`
);
```

While this may seem intuitive at first, it will unfortunately give you the following error: `Type 'undefined' cannot be used as an index type.` because TypeScript doesn't know if oppositeDirection will actually map to an actual value. To fix this, you could first make sure that `oppositeDirection[north]` isn't `undefined`.

```js
let north: direction = "n";
let oppositeDirection = oppositeDirections[north];

if (oppositeDireciton) {
  console.log(
    `The opposite of ${translations[north]} is ${translations[oppositeDireciton]}`
  );
}
```

This feels kind of annoying, as it requires an extra runtime check only to satisfy the TypeScript compiler. In this case we _know_ that oppositeDirection is always going to return a direction (the way that we typed it with a string union).

The solution? Use a [Mapped Type](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) instead:

```js
const oppositeDirections: { [K in Direction]: Direction } = {
 n: "s",
 s: "n",
 w: "e",
 e: "w",
};
```

With a mapped type the TypeScript compiler will know exactly what properties will exist on the object _ahead of time_. Therefore you can safely access the property with no extra conditional check needed.

Enjoy!
