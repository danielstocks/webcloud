# Stubbing window.location in JavaScript

---

<PubDate>6 February 2013</PubDate>

---

Let's imagine you have the following code:

```javascript
var el = document.getElementById("some-container");
el.addEventListener('click', handleClick, false);

function handleClick(e) {
  var link = e.target.getElementsByTagName('a')[0]
  if(link) {
    if(e.metaKey) {
      return window.open(link.href);
    }
    window.location = link.href;
  }
}
```

## How do I test this?

Short answer: You don't. The reason is that the browser will not allow you to override anything in the window [host object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

Long answer: Your best bet is to abstract any 'window' related logic into your own methods. For example, let's create a redirect helper method:

```javascript
function redirect(path, _blank) {
  if(path) {
    if(_blank) {
      return window.open(path);
    }
    return window.location = path;
  }
}
```

Now let's utilize this method to simplify the handleClick method.


```javascript
function handleClick(e) {
  var link = e.target.getElementsByTagName('a')[0]
  if(link) {
    redirect(link.href, e.metaKey);
  }
}
```

## Stub it all

Testing it will now be possible by stubbing out our redirect method. I'm using [Sinon.js](http://sinonjs.org/) here, a library that provides excellent tooling for stubs.

```javascript
sinon.stub(window, 'redirect');

// Create a fixture
var div = document.createElement('div');
div.innerHTML = '<a href="#hello">Hello</a>';

// Override event object
var e = {
  target : div,
  metaKey: false
};

// Call our method
handleClick(e);

// Assert
stub.calledWith('#hello', false); // === true
```

That's all folks. Happy testing!
