describe("spinDancer", function() {

  var spinDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinDancer = new SpinDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(spinDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its color change", function() {
    sinon.spy(spinDancer, 'changeColor');
    spinDancer.step();
    expect(spinDancer.changeColor.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(spinDancer, "step");
      expect(spinDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(spinDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinDancer.step.callCount).to.be.equal(2);
    });
  });
});
