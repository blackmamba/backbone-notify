'use strict';

//Depends
const $               = require('jquery');
const notify          = require('./notify');

notify.settings({
  delay: 2 * 1000,    //how many seconds
  autohide: false,    //set true if u want to hide them
  position: 'top',    //initial position top || bottom
  margin: 10,         //margin between notifications
  start: 30           //start position from window border top:{start} || bottom:{start}
});

$(function() {
  notify('danger',   'BB:NOTIFY:ALERT');
  notify('warning',  'BB:NOTIFY:WARNING');
  notify('info',     'BB:NOTIFY:INFO');
  notify('success',  'BB:NOTIFY:SUCCESS');
});
