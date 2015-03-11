var SquareDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = this.createNode('square-dancer');
  this.setPosition(top, left);
};

SquareDancer.prototype = Object.create(Dancer.prototype);

SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.oldStep = Dancer.prototype.step;

SquareDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  this.changeColor();
};

SquareDancer.prototype.changeColor = function() {
	var red = (Math.floor(Math.random() * 255)).toString();
	var green = (Math.floor(Math.random() * 255)).toString();
	var blue = (Math.floor(Math.random() * 255)).toString();
	this.$node.css('border-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
};