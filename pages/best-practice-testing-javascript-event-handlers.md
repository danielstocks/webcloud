# How You Should be Testing JavaScript Event Handlers

<PubDate>22 February 2013</PubDate>

---

At some point, you'll find event handling code on top of jQuery written like this:

```javascript
$('#some-element').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
});
```

Testing this code will require us to:

1. Setup a HTML fixture so that the event can bind to it.
2. Fire the actual click event on the fixture
3. Assert if the CSS class was changed on the target element

Here's the test:

```javascript
// Create fixture
$('body').append('<div id="#some-element"></div>');
// Trigger click event
$('#some-element').trigger('click');
// Assert
assert($('some-element').attr('class') == 'active');
```

We're essentially forced to test our code through the jQuery API. As you may know, jQuery already has a test suite, we should really focus on testing our code.

Further more, there is no way to assert that `e.preventDefault()` was called.

Let's make our code slightly more verbose to improve testability.

```javascript
$('#some-element').click(toggleMe);
function toggleMe(e) {
  e.preventDefault();
  $(e.target).toggleClass('active');
}
```

Testing the above will be easier:

```javascript
// Setup
var div = document.createElement('div');
var e = {
  target : div,
  preventDefault: sinon.spy()
}
toggleMe(e);

//Assert
assert(e.preventDefault.called);
assert(div.className == 'active');
```

The `sinon.spy()` method is from [Sinon.js](https://sinonjs.org/) which is an excellent library for performing common test tasks like spying and stubbing. It allows us to assert that the preventDefault was called on the supplied event object.

That's all folks. Happy refactoring!
