describe ('triangle', function() {
  it("should return 'equilateral' when 3 equal lengths are input", function() {
    triangle(3, 3, 3).should.equal("equilateral");
  });
  it("should return 'isosceles' when 2 out of 3 lengths inputted are exactly equal", function() {
    triangle(5, 5, 3).should.equal("isosceles");
  });
  it("should return 'scalene' when no sides inputted are equal to each other", function(){
    triangle(6, 4, 7).should.equal("scalene");
  });
  it("should return 'not a triangle' when at least 1 length inputted is at least as long as the other 2 combined", function() {
    triangle(2, 2, 8).should.equal("not a triangle");
  });

});
