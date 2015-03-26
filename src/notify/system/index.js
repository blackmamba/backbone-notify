'use strict';

// Depends
const $           = require('jquery');
const _           = require('underscore');
const Backbone    = require('backbone');
const NotifyView  = require('./views/notify-item');

Backbone.$        = $;

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
      autohide: true, //autohide after
      delay: 4 * 1000, //time before message will hided
      patching: false
    }, opts);
    //registry of notify types
    this.registry     = [];
    //avaliavble notify types
    this.defaults     = ['success', 'info', 'warning', 'danger', 'response'];
    //patching BB fetch && save
    //if (this.options.patching) this.preparePatching();
    //listen for moving
    this.collection.listenTo(this.collection, 'add', this.move);
    this.collection.listenTo(this.collection, 'change:hidden', this.move);
  }

  /**
   * Register events
   * @param  {array}  types [List of types]
   * @return {[type]}
   */
  register() {
    this.defaults.map((item) => {
      this.listenTo(Backbone, 'notify:' + item, (text) => {
        let view = new NotifyView({text, item}, this.options);
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
    this.options = _.extend(this.options, opts);
    return this;
  }

  /**
   * Unrigister event
   * @param  {[type]} type [description]
   * @return {[type]}      [description]
   */
  unregister(type) {}

  /**
   * Move showable items to down
   * @return {[type]} [description]
   */
  move() {
    let bottom    = 10;
    let margin    = 10;
    let showable  = this.where({ hidden: false });
    showable.map((item) => {
      let el = item.get('el');
      el.css('bottom', bottom);
      bottom = bottom + el.outerHeight() + margin;
    });
  }

};
