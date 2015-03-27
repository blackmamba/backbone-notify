'use strict';

//Depends
const $             = require('jquery');
const {View}        = require('backbone');
const NotifyModel   = require('../models/notify');

/**
 * NotifyView
 * @type {[type]}
 */
module.exports = class NoifyItem extends View {

  /**
   * Constructor
   * @param  {Object} data    [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  constructor(data = {}, options = {}) {

    this.model      = new NotifyModel({data, options, hidden: false});
    this.className  = 'notify ' + data.item;
    this.template   = require('../templates/alert.jade');
    //if autohide is enable
    if (options.autohide) setTimeout(() => {
      this.model.set('hidden', true);
    }, options.delay);
    this.events = {
      'click .close': () => { this.model.set('hidden', true); }
    };
    super(data, options);
    //listen change hide attr
    this.listenTo(this.model, 'change:hidden', this.hide);
  }

  /**
   * Remove element from DOM
   * @return {[type]} [description]
   */
  hide() {
    this.unbind();
    this.$el.remove();
  }

  /**
   * Render
   * @return {[type]} [description]
   */
  render() {
    this.$el.html(this.template(this.model.toJSON())).appendTo('body');
    this.model.set('el', this.$el);
    return this;
  }

};
