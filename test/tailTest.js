const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it('returns "Lighthouse", "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it('returns 2 for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result.length,2);
  });

  it('returns "Lighthouse" for result[0] of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result[0],"Lighthouse");
  });

  it('returns "Labs" for result[1] of ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(result[1],"Labs");
  });

  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it('returns "Lighthouse", "Labs" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words),["Lighthouse", "Labs"]);
  });

  it('returns 3 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(words.length,3);
  });

});