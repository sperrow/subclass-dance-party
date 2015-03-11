// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = this.createNode('dancer');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // now that we ha ve defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout( function () {
    context.step();
  }, context.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings);

};
  
Dancer.prototype.createNode = function(className) {
  return $('<span class="dancer ' + className + '"></span>');
};

Dancer.prototype.lineUp = function() {
  this.$node.css({
    'position': 'relative',
    'float': 'left',
    'left': 0,
    'top': '50%'
  });
};