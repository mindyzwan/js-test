var expect = require('chai').expect;
var mob = require('../app/mob');

describe('The mob', () => {
  it('3 returns fizz', () => {
    expect(mob.canMakeTestPass()).to.be.true;
  });
});
