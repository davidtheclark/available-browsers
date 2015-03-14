# locate-browsers
 [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Find browsers on your system.

This module asynchronously offers an object containing information you might like to have about browsers available on your system.
You access this result object by passing a callback or using the returned Promise.

`locate-browsers` combines the labors of the following browser-specific modules:
- [`locate-chrome`](https://github.com/davidtheclark/locate-chrome)
- [`locate-firefox`](https://github.com/davidtheclark/locate-firefox)
- [`locate-safari`](https://github.com/davidtheclark/locate-safari)
- [`locate-ie`](https://github.com/davidtheclark/locate-ie)

(Of course, more modules could be made to address more browsers.)

Right now, the result object contains the path to each browser that was found on your system.

(Of course, more information could be provided by adding more features to the browser-specific modules above.)

Here's an example result object:

```js
{
  Chrome: {
    path: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  },
  Firefox: {
    path: '/Applications/Firefox.app/Contents/MacOS/Firefox'
  },
  Safari: {
    path: '/Applications/Safari.app/Contents/MacOS/Safari'
  }
}
```

## Usage

```js
var locateBrowsers = require('locate-browsers');

// Use a callback
locateBrowsers(function(res) {
  console.log(res);
});

// Use the returned Promise
locateBrowsers.then(function(res) {
  console.log(res);
});
```

### CLI Usage

`stdout` the result object:
```bash
> locate-browsers
# { Chrome: { path: '/Applications ...
```
