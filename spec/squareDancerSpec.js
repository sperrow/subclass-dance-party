describe("squareDancer", function() {

  var squareDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squareDancer = new SquareDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(squareDancer.$node, 'toggle');
    squareDancer.step();
    expect(squareDancer.$node.toggle.called).to.be.true;
  });

  it("should have a step function that makes its color change", function() {
    sinon.spy(squareDancer, 'changeColor');
    squareDancer.step();
    expect(squareDancer.changeColor.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(squareDancer, "step");
      expect(squareDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(squareDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
    });
  });
});
