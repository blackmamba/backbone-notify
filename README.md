## Backbone Notify

Simple and lightweight Backbone notification system uses ES6 (babel.js)

### How to use?

```javascript
const $               = require('jquery');
const notify          = require('./notify');
const BackboneNotify  = require('./notify/system');

$(function() {
  
  //init component
  new BackboneNotify({
    delay: 5 * 1000,
    autohide: false
  }).register();
  
  //run notify via BB.trigger
  notify('danger',   'BB:NOTIFY:ALERT');
  notify('warning',  'BB:NOTIFY:WARNING');
  notify('info',     'BB:NOTIFY:INFO');
  notify('success',  'BB:NOTIFY:SUCCESS');

});

```

### WTF is ES6?
Simply, the next version of JavaScript that contains some really cool features. You might check out some of these:

- https://wiki.mozilla.org/ES6_plans
- http://globaldev.co.uk/2013/09/es6-part-1/
- http://code.tutsplus.com/tutorials/eight-cool-features-coming-in-es6--net-33175


### Info about dev tools 

#### [Babel]
Transpiles ES6 code into regular ES5 (today's JavaScript) so that it can be run in a today browser. Like traceur but doesn't need a runtime to work. Formerly known as 6to5.

#### [CommonJS]
Babel is configured to transpile ES6 modules into CommonJS syntax and we use browserify to bundle the code into one file to deliver it to the browser.

#### [Browserify]
Browserify walks through all files and traces down all `require()`s to bundle all files together.  

#### [Gulp]
Task runner to make defining and running the tasks simpler.

[ES6]: http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts
[Babel]: http://babeljs.io/
[CommonJS]: http://wiki.commonjs.org/wiki/CommonJS
[Browserify]: http://browserify.org/
[Gulp]: http://gulpjs.com/
