'use strict';

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');

const card = require('../../card/card-model');

const prepopulateBoard = function(hook){
  if (hook.data.cards) {
    // make a promise for every card in hook.data
    const cardPromises = hook.data.cards.map(data => {
      return card.create(data)
    });
    // when all promises resolve, update hook.data
    return Promise.all(cardPromises).then(cards => {
        hook.data.cards = cards;
    });
  }
};

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [prepopulateBoard],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
