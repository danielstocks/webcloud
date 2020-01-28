# Creating a Sortable List Component in React

<PubDate>3 April 2014</PubDate>

---

[React](https://reactjs.org/) is all about data flow. The idea is that you should never manually change the state of the application by modifying the DOM. Instead, the DOM should always reflect the UI based on the state of the application data.

Having personally worked a lot with libraries like jQuery and Backbone.js, the non DOM-centric philosophy of React was initially somewhat confusing to me.

To better illustrate the reactive workflow I'm going to show you how to create a sortable list component. Instead of using one of the many "sortable-widget-plugins" that are out there, we're naively going to roll our own HTML5 based solution.


## Starting with the data

In this example I'm just going to use an array of color names as our application data.

```javascript
var colors = [
  "Red", "Green", "Blue", "Yellow", "Black", "White", "Orange"
];
```

## A basic list component

Next up we need to create a basic component that will render a list.

```jsx
var List = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  render: function() {
    return <ul>
      {this.props.data.map(function(item) {
        return <li>{item}</li>;
      })}
    </ul>
  }
});
```

A few lines of CSS to give it the looks

```css
ul {
  list-style: none;
  margin: 0;
  padding: 0
}
li {
  padding: 5px;
  background: #eee
}
```

And finally we call to render it into the DOM:

```jsx
ReactDOM.render(
  <List data={colors}/>, document.getElementById('app')
);
```

## Let's start dragging

The story about HTML5 Drag & Drop is a little bit ugly. The spec itself has repeatedly (and perhaps deservedly) [received a beating](http://www.quirksmode.org/blog/archives/2009/09/the_html5_drag.html), and the browser implementations haven't been [overly impressive](http://www.kryogenix.org/code/browser/custom-drag-image.html) either. All that being said, it actually works.


### Adding event handlers

The first thing we need to do is to update the render method and add some event handlers for the drag events.


```jsx
var List = React.createClass({
  ...
  render: function() {
    return (
      <ul onDragOver={this.dragOver}>
        {this.state.data.map(function(item, i) {
          return (
            <li
              data-id={i}
              key={i}
              draggable="true"
              onDragEnd={this.dragEnd}
              onDragStart={this.dragStart}
            >
              {item}
            </li>
          )
        }, this)}
      </ul>
    )
  }
});
```
The key attribute on the list items is used internally by React to keep [things efficient](http://facebook.github.io/react/docs/reconciliation.html). I've also added a data-id attribute that will be used to find out over which element the drop is performed.

## Creating a drop placholder

For the sake of usability we're going to add a placeholder that will indicate for the user were the drop will happen.

```javascript
var placeholder = document.createElement("li");
placeholder.className = "placeholder";
```


...and here's some shiny CSS to make it all pretty and nice.

```css
li.placeholder {background: rgb(255,240,120);}
li.placeholder:before {
  content: "Drop here";
  color: rgb(225,210,90);
}
```

## Handling the events

All that is left now is to wire up the event handlers to some actual functions.

```jsx
var List = React.createClass({
  ...
  dragStart: function(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';

    // Firefox requires calling dataTransfer.setData
    // for the drag to properly work
    e.dataTransfer.setData("text/html", e.currentTarget);
  },
  dragEnd: function(e) {

    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);

    // Update state
    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  },
  dragOver: function(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className == "placeholder") return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);
  },
  ...
});
```

Instead of moving the DOM node being dragged, we simply update the state of the component. By doing this, React will automatically render the drop.

## Improving the dragging experience

There is one major flaw in what we've created so far. Items can only be dropped before another item, what if we want to drag something to the end of the list?

To solve this, we'll track the relative position of the mouse inside the element being dragged over.

```javascript
// Inside the dragOver method
var relY = e.clientY - this.over.offsetTop;
var height = this.over.offsetHeight / 2;
var parent = e.target.parentNode;

if(relY > height) {
  this.nodePlacement = "after";
  parent.insertBefore(placeholder, e.target.nextElementSibling);
}
else if(relY < height) {
  this.nodePlacement = "before"
  parent.insertBefore(placeholder, e.target);
}
```

We'll also have to update the dragEnd method to update the data accordingly.

```javascript
// Inside dragEnd method
if(this.nodePlacement == "after") to++;
```

That's all folks, and remember kids: Stay Reactive!

