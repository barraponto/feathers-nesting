'use strict';

const assert = require('assert');
const app = require('../../../src/app');

const chai = require('chai');
chai.use(require('chai-http'));

describe('board service', function() {
    it('registered the boards service', () => {
        assert.ok(app.service('boards'));
    });
    it('should create a board item', (done) => {
        chai.request(app)
            .post('/boards')
            .set('Accept', 'application/json')
            .send({
                text: 'This is a new board'
            })
            .end((err, res) => {
                console.log(res.body);
                done();
            });
    });
});
