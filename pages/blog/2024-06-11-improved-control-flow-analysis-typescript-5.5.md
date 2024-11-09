# Improved control flow analysis in TypeScript 5.5

---

<Intro>
TypeScript 5.5 ships with some nice ergonomic improvements to type inference when working with arrays and indexed accessed objects.
</Intro>

Isn't it annoying when the TypeScript compiler can't infer a type that you as developer felt was quite obvious to deduce? I know that I hate to write code just to please the compiler. This has thankfully improved a lot of the years and has now been improved further in [TypeScript 5.5](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/) (pending release as of writing)

## Inferred Type Predicates

Type inference has now been improved when working with arrays:

```ts
const items = [1, 2, "three"];
items
  .filter(item => typeof item === "string")
  .map(item =>
    // item: number | string
    item.toUpperCase()
  );
```

Previously, if you tried to compile the above code, the compiler would tell you `Property 'toUpperCase' does not exist on type 'number'`. To fix this you would have to throw in an additional type check inside the map function:

```ts
const items = [1, 2, "three"];
items
  .filter(item => typeof item === "string")
  .map(item => {
    // Checking for string again
    if (typeof item ==== "string") {
        return item.toUpperCase();
    }
  });
```

lo and behold I was pleasantly surprised the other day when I by accident tried to compile some code without the extra type check and it somehow worked! Only then did I learn that [TypeScript 5.5](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/#inferred-type-predicates) can [Infer type predicates from function bodies using control flow analysis](https://github.com/microsoft/TypeScript/pull/57465). Which means:

```ts
const items = [1, 2, "three"];
items
  .filter(item => typeof item === "string")
  .map(item =>
    // item: string
    item.toUpperCase()
  );
```

Here's another similar example of what we can now do without having to resort to extra type checks just to satisfy the compiler!

```ts
type Cat = {
  type: "cat";
};
type Dog = {
  type: "dog";
  color: string;
};

type Animal = Cat | Dog;

let animals: Animal[] = [
  { type: "cat" },
  { type: "dog", color: "pink" },
  { type: "dog", color: "red" }
];

let dogColors = animals
  .filter(animal => animal.type === "dog")
  .map(dog => dog.color);

console.log(dogColors); // => ["pink", "red"]
```

Try it out yourself in the [TypeScript Playground](https://www.typescriptlang.org/play/?ts=5.5.0-beta#code/C4TwDgpgBAwghsKBeKBvAUFKpIC4oBEAxggQDToC+6O0AIgPYDmyam24E+BAJs+eyIMANgwBO+AM7AxASwB2TKuhqcoAQXmyAtnGGt4iAD5RGS9MIiI4W3cMn5NOvQG0AuqxftUHPIRLABFCUFFg+tNx8TORQQqIShGAKANYEId6+XIRRMXHi3GIQPGnobiqWiFEwIuKSrDbO9gB0AGaywsAQYgAUDXbIAHxQ3ex9ek20yEgovPzoAJTzTbpg3VGDw+xRTXliC-MqQvKSIhBNokxrzNXxkvNAA). Fun fact: The same developer that raised this issue [7 years ago](https://github.com/microsoft/TypeScript/issues/16069) now finally managed to fix it!

## Control Flow Narrowing for Constant Indexed Accesses

Another improvement is that TypeScript is now able to narrow expressions of the form `obj[key]` when both ´obj´ and ´key´ are constant.

```ts
function test(obj: Record<string, unknown>, key: string) {
  if (typeof obj[key] === "string") {
    // Now ok, previously was "Object is of type 'unknown'".
    obj[key].toUpperCase();
  }
}

test(
  {
    greeting: "hello"
  },
  "greeting"
);
```

Trying to compile the above code prior to 5.5 would fail, but now works as expected. Try out [the example](https://www.typescriptlang.org/play/?ts=5.4.5#code/GYVwdgxgLglg9mABFApgZygCjgIwFYBciASihHAE4AmAPBhTGAOYA0i4A1mHAO5gB8bDigCeReoyYBKRAG8AUIiWIYwRJigiADijhrceANrCRAXUQBeK4gBEE5jZkLlLxAeOjTAOihwAqlo6FADCAIZoKJhSANxKAPRxiAByvG4cbFoUKABu8CBoADYiiDzhtgDy+GRQKmhuapo6iADknNx8zTZeisoAvvL98qgYmM6ITFkosMxENgAWKAUFcDYDbDYTKFOSjkA) yourself in the TypeScript Playground.

That's it. Less screaming, kicking and fighting the compiler, more fun and games. Enjoy!
