'use strict';

const assert = require('assert');
const app = require('../../../src/app');

const chai = require('chai');
chai.use(require('chai-http'));

describe('card service', function() {
  it('registered the cards service', () => {
    assert.ok(app.service('cards'));
  });

  it('should create a board item', (done) => {
    chai.request(app)
      .post('/cards')
      .set('Accept', 'application/json')
      .send({
        text: 'This is a new card'
      })
      .end((err, res) => {
        done();
      });
  });

});
