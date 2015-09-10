describe("countUpBy", function() {
  it("count up to 10 by 1", function() {
    expect(countUpBy(1, 10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });

  it("will count up to 20 by 2", function() {
    expect(countUpBy(2,20)).to.eql([2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
  });

  it("will count up to 50 by 7", function() {
    expect(countUpBy(7,50)).to.eql([7, 14, 21, 28, 35, 42, 49])
  });

});
