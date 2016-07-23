"use strict";
describe("A greeter", function(){
  it("greets you by the name you provide", function(){
    expect(greet("Daniel")).toBe("Hello, Daniel");
  });
});
