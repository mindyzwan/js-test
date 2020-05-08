var expect = require("chai").expect;
var mob = require("../app/mob");

describe("The mob", () => {
  it("non-multiple returns itself", () => {
    let expected = 1;
    let actual = mob.fizzBuzz(1);
    expect(expected).to.equal(actual);
  });
});
