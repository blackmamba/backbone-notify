'use strict';

const Backbone = require('backbone');

/**
 * Notify run
 * @param  {[type]} type [description]
 * @param  {[type]} text [description]
 * @return {[type]}      [description]
 */
module.exports = function(type, text) {
  Backbone.trigger('notify:' + type, text);
};
