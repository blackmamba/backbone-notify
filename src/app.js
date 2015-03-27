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
  notify('info',     'BB:NOTIFY:INFO (hide after 8sec)', {
    autohide: true,
    delay: 8 * 1000,
    position: 'bottom'
  });
  notify('success',  'BB:NOTIFY:SUCCESS (nonhide)', {
    position: 'bottom'
  });
});
