// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.$node = $('<span class="dancer"></span>');
  // use jQuery to create an HTML <span> tag

  this.step();
  this.setPosition(top, left);
  //this.lineup()
};

Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top || left,
    left: left || Math.random() * 300
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineup = function() {

}