'use strict';
const $               = require('jquery');
const _               = require('underscore');
const Backbone        = require('backbone');
const BackboneNotify  = require('./system');

let Notify = new BackboneNotify().register();

/**
 * Notify run
 * @param  {[type]} type [description]
 * @param  {[type]} text [description]
 * @return {[type]}      [description]
 */
module.exports = function(type, text, options = {}) {
  Backbone.trigger('notify:' + type, text, options);
};

/**
 * [configure description]
 * @param  {Object} config [description]
 * @return {[type]}        [description]
 */
module.exports.settings = function(config = {}) {

  let opts = _.extend({
    delay: 5 * 1000,    //how many seconds
    autohide: true,     //set true if u want to hide them
    position: 'bottom', //initial position top || bottom
    margin: 10,         //margin between notifications
    start: 10           //start position from window border top:{start} || bottom:{start}
  }, config);

  if (!Notify) new BackboneNotify(opts);
  else Notify.settings(opts);
};
