# Removing HTML elements from a NodeList

## The Scenario

You have the following elements:

```html
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>6</span>
```

And now you want to remove them. Maybe you tried the following:


```javascript
var spans = document.getElementsByTagName("span"),
    l = spans.length;
for(var i = 0; i < l; i++) {
    spans[i].parentNode.removeChild(spans[i]);
}
```

If you did, you probably failed, why? Because when you remove a element from the DOM, any reference to this element previously stored in a NodeList is also removed.

When the for loop reaches the 3:rd iteration there are only 2 items left in the spans NodeList and hence spans[3] is all of a sudden `undefined`.

## The Solution

The solution is simply to iterate through the NodeList backwards.

```javascript
while(l--) {
    spans[l].parentNode.removeChild(spans[l]);
}
```

By doing this, you'll safely remove all span elements from the document


That is all.
