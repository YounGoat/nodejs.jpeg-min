#	jpeg-min

*jpeg-min* is based on [guetzli](https://github.com/google/guetzli/).

##	How to use?

```javascript
var jpegmin = require('jpeg-min');

// The jpeg file will be compressed and replaced.
jpegmin('/path/to/my.jpg', function(err) {
	// ...
});
```

__ATTENTION__: By default, the jpeg file will be replaced with compressed one. So, if you wanna keep the original jpeg, make a copy before invoke *jpeg-min*.
