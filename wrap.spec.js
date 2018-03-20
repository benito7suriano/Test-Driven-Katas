const { expect } = require("chai");
const wrap = require("./wrap");
const sinon = require('sinon');


describe("wrap", () => {
  // is a function
  it("is a function", () => {
    expect(wrap).to.be.a('function');
  });
  // takes two parameters
  it("takes in two parameters", () => {
    expect(wrap.length).to.equal(2);
  });
  // returns empty string
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  // line break inserted so that no line is longer than the column number
  it('inserts line breaks so that no line is longer   than the column number', () => {
    expect(wrap("hello we are ttd",6)).to.equal("hello \nwe are\n ttd");
  });
  // doesn't break up words (inserts on spaces)
  xit('doesn\'t break up words', () => {
    expect(wrap("xxx xxxx",6)).to.be('xxx \nxxxx');
  });
});

// can handle multiple spaces
// can handle special chars
// can handle words that are longer than 'column number'
