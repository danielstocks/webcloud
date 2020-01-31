# A Truly Reactive Sortable Component

---

<PubDate>24 April 2014</PubDate>

---

You may recently have heard a lot of chanting on how [data changing over time is the root of all evil](http://youtu.be/nYkdrAPrdcw?t=24m58s), "the source of truth" and how [React](http://facebook.github.io/react/) is all about "one directional data flow". These are all pretty words but what do they mean in practice?

To better illustrate this I'm going to take the [Sortable React component](/sortable-list-component-react-js) that I built, and fix a major flaw in it's design.

## Getting rid of manual DOM labour

The "drop" action is already being done reactively. This is nice because the change will reflect on any other component in UI that relies on the same data. But I'm still manually inserting a placeholder on drag. What if I wanted to reflect this state somewhere else in the application or vice versa?

### Redefining the state
We need a minor update to the data structure in order for it to carry some more information about the state.

```javascript
var data = {
  colors: [
    "Gold",
    "Crimson",
    "Hotpink",
    "Blueviolet",
    "Cornflowerblue",
    "Skyblue",
    "Lightblue"
  ]
};
```

## Continuously re-rendering everything

Keeping track of DOM changes over time is hard, re-rendering everything based on a state is easier. Instead of manually removing and inserting a DOM placeholder node, we're going to keep track of what's being dragged by saving it in the state.

The code is pretty straightforward. The interesting part is the sort method, where we are setting a "dragging" property to the state

```jsx
sort: function(colors, dragging) {
  var data = this.state.data;
  data.colors = colors;
  data.dragging = dragging;
  this.setState({data: data});
},
dragEnd: function() {
  this.sort(this.state.data.colors, undefined);
},
dragStart: function(e) {
  this.dragged = Number(e.currentTarget.dataset.id);
  e.dataTransfer.effectAllowed = 'move';

  // Firefox requires calling dataTransfer.setData
  // for the drag to properly work
  e.dataTransfer.setData("text/html", null);
},
dragOver: function(e) {
  e.preventDefault();

  var over = e.currentTarget
  var dragging = this.state.data.dragging;
  var from = isFinite(dragging) ? dragging : this.dragged;
  var to = Number(over.dataset.id);
  if((e.clientY - over.offsetTop) > (over.offsetHeight / 2)) to++;
  if(from < to) to--;

  // Move from 'a' to 'b'
  var items = this.state.data.colors;
  items.splice(to, 0, items.splice(from,1)[0]);
  this.sort(items, to);
},
render: function() {
  var listItems = this.state.data.colors.map(function(item, i) {
    var dragging = (i == this.state.data.dragging) ? "dragging" : "";
    return (
      <li data-id={i}
          className={dragging}
          key={i}
          draggable="true"
          onDragEnd={this.dragEnd}
          onDragOver={this.dragOver}
          onDragStart={this.dragStart}>
        {item}
      </li>
    );
  }, this);
  return {listItems}
}
```

And that's it: The Root of all Evil and The Source of truth!
