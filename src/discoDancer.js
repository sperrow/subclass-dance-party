var DiscoDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = this.createNode('disco-dancer');
  this.setPosition(top, left);
};

DiscoDancer.prototype = Object.create(Dancer.prototype);

DiscoDancer.prototype.constructor = DiscoDancer;

DiscoDancer.prototype.flip = function() {
  this.$node.toggleClass('flip');
};

DiscoDancer.prototype.oldStep = Dancer.prototype.step;

DiscoDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.flip();
};

