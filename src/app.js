'use strict';

//Depends
const $               = require('jquery');
const notify          = require('./notify');

//set default notification settinds
notify.settings({
  delay: 2 * 1000,    //how many seconds
  autohide: true,     //set true if u want to hide them
  position: 'top',    //initial position top || bottom
  margin: 10,         //margin between current and next notify
  start: 20           //start position from window border top:{start} || bottom:{start}
});

$(function() {
  notify('danger',   'BB:NOTIFY:ALERT (4sec)', {
    delay: 4 * 1000
  });
  notify('warning',  'BB:NOTIFY:WARNING (6sec)', {
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
      'font-size': 10,
      'font-weight': 'bold'
    }
  });

  $('button').on('click', function() {
    notify($(this).data('action'), new Date(), {
      position: 'bottom',
      autohide: true,
      delay: 4 * 1000
    });
  });
});
