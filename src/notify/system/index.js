'use strict';

// Depends
const $           = require('jquery');
const _           = require('underscore');
const Backbone    = require('backbone');
const NotifyView  = require('./views/notify-item');

/**
 * Notify lib for ED2
 * @type {object}
 */
module.exports = class Notify extends Backbone.View {

  /**
   * Constructor
   * @param  {Object} opts [list of options]
   * @return {[type]}      [description]
   */
  constructor(opts = {}) {
    this.collection = new Backbone.Collection();
    //extend options
    this.options    = _.extend({
      autohide: true,     //autohide after
      delay: 2 * 1000,    //time before message will hided
      position: 'bottom', //
      margin: 10,
      start: 10
    }, opts);
    //registry of notify types
    this.registry     = [];
    //avaliavble notify types
    this.defaults     = ['success', 'info', 'warning', 'danger', 'response'];
    //listen for moving
    this.listenTo(this.collection, 'add', this.move);
    this.listenTo(this.collection, 'change:hidden', this.move);
  }

  /**
   * Register events
   * @param  {array}  types [List of types]
   * @return {[type]}
   */
  register() {
    this.defaults.forEach((item) => {
      this.listenTo(Backbone, 'notify:' + item, (text, options = {}) => {
        let view = new NotifyView({text, item}, $.extend({}, this.options, options));
        view.render();
        this.collection.add(view.model);
      });
      this.registry.push(item);
    });
    return this;
  }

  /**
   * Extends default settings
   * @param  {[type]} opts [list of settings]
   * @return {[type]}
   */
  settings(opts) {
    this.options  = _.extend(this.options, opts);
    return this;
  }

  /**
   * Unrigister event
   * @param  {[type]} type [description]
   * @return {[type]}      [description]
   */
  unregister(type) {}

  /**
   * Move showable items to down || up
   * @return {[type]} [description]
   */
  move() {
    let startTop      = this.options.start;
    let startBottom   = this.options.start;
    this.collection.where({ hidden: false }).forEach((item) => {
      let opts = item.get('options');
      let el = item.get('el');
      switch (opts.position){
        case 'top':
          el.css(opts.position, startTop);
          startTop = startTop + el.outerHeight() + opts.margin;
        break;
        case 'bottom' :
          el.css(opts.position, startBottom);
          startBottom = startBottom + el.outerHeight() + opts.margin;
        break;
      }
    });
  }

};
