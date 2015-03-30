## Backbone Notify

Simple and lightweight Backbone notification system uses ES6 (babel.js)

### NPM package

```bash

npm i backbone-notify --save

```

### How to use?

```javascript

'use strict';

//Depends
const $               = require('jquery');
const notify          = require('./notify');

//set default notification settinds
notify.settings({
  delay: 2 * 1000,    //how many seconds
  autohide: false,    //set true if u want to hide them
  position: 'top',    //initial position top || bottom
  margin: 10,         //margin between current and next notify
  start: 20           //start position from window border top:{start} || bottom:{start}
});

$(function() {
  notify('danger',   'BB:NOTIFY:ALERT (hide after 4sec)', {
    autohide: true,
    delay: 4 * 1000
  });
  notify('warning',  'BB:NOTIFY:WARNING (hide after 6sec)', {
    autohide: true,
    delay: 6 * 1000
  });
  notify('info',     'BB:NOTIFY:INFO (8sec)', {
    delay: 8 * 1000,
    position: 'bottom',
    css: {
      'font-size': 14,
      'font-weight': 'bold'
    }
  });
  notify('success',  'BB:NOTIFY:SUCCESS (20sec)', {
    delay: 20 * 1000,
    position: 'bottom',
    css: {
      'font-size': 15,
      'font-weight': 'bold'
    }
  });
});


```

### Want to make it better?
Sure, i'll glad to see pull requests ^_^

```sh

git clone https://github.com/mrsum/backbone-notify.git 
  && cd $_ 
  && npm i 
  && gulp watch

```

### Want to compile standalone backbone-notify via Gulp? 

```bash

gulp build

```
And look into dist/ folder

### Customize
```css

.notify {
  right: 10px;
  color: #fff;
  position: fixed;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px 20px;
  border-radius: 6px;
}
.notify:hover {
  background-color: rgba(0, 0, 0, 0.6);
}
.notify, .close {
  cursor: pointer;
}
.notify .close {
  font-size: 14px;
  position: absolute;
  top: 3px;
  right: 3px;
}

.notify.danger        {background-color: rgba(131, 0, 25, 0.8);}
.notify.danger:hover  {background-color: rgba(131, 0, 25, 0.6);}

.notify.warning       {background-color: rgba(155, 21, 21, 0.8);}
.notify.warning:hover {background-color: rgba(155, 21, 21, 0.6);}

.notify.info          {background-color: rgba(9, 93, 129, 0.8);}
.notify.info:hover    {background-color: rgba(9, 93, 129, 0.6);}

.notify.success       {background-color: rgba(12, 129, 9, 0.8);}
.notify.success:hover {background-color: rgba(12, 129, 9, 0.6);}

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
