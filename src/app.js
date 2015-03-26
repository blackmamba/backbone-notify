'use strict';

//Depends
const $               = require('jquery');
const notify          = require('./notify');
const BackboneNotify  = require('./notify/system');

$(function() {

  new BackboneNotify({
    delay: 5 * 1000,
    autohide: false
  }).register();

  notify('danger',   'BB:NOTIFY:ALERT');
  notify('warning',  'BB:NOTIFY:WARNING');
  notify('info',     'BB:NOTIFY:INFO');
  notify('success',  'BB:NOTIFY:SUCCESS');

});
