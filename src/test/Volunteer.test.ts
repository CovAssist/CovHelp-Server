import "mocha";
import { expect } from "chai";
describe("sum", () => {
  it("should add numbers", () => {
    expect(1 + 2 + 3 + 4).to.equal(10);
  });
});
