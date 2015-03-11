describe("discoDancer", function() {

  var discoDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    discoDancer = new DiscoDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(discoDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(discoDancer, "step");
      expect(discoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(discoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(discoDancer.step.callCount).to.be.equal(2);
    });
  });
});
