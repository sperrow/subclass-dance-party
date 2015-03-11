var PartnerDancer = function(top, left, timeBetweenSteps){

  DiscoDancer.call(this, top, left, timeBetweenSteps);
  this.$node = this.createNode('partner-dancer');
  this.setPosition(top, left);
};

PartnerDancer.prototype = Object.create(DiscoDancer.prototype);

PartnerDancer.prototype.constructor = PartnerDancer;

PartnerDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.action();
  this.flip();



};

PartnerDancer.prototype.action = function() {
  if (this.$node.css('top') !== "") {
    var closest;
    var closestDancer;
    for(var i = 0; i < dancers.length; i++) {
      if (dancers[i].constructor === this.constructor) {
        continue;
      }
      var a = Math.abs(dancers[i].top - this.top);
      var b = Math.abs(dancers[i].left - this.left);
      var c = Math.sqrt(a * a + b * b);
      if (closest) {
        if (c < closest) {
          closest = c;
          closestDancer = dancers[i];
        }
      } else {
        closest = c;
        closestDancer = dancers[i];
      }
    }
    this.setPosition(closestDancer.top + 40, closestDancer.left + 40);
  //   var thisTop = this.top;
  //   var thisLeft = this.left;
  //   this.setPosition(closestDancer.top)
  }
};