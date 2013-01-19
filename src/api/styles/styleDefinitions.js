fc.styleDefinitions = function () {
  var self = this;
  fc.node.call(self, 'definition');  
};

fc.styleDefinitions.prototype = fc.utils.extend(fc.node);

fc.styleDefinitions.prototype.defineAnimationStyle = function (styleName) {
  var s = new fc.animationStyle(styleName);
  this.addNode(s);
  return s;
};

fc.styleDefinitions.prototype.defineShadowStyle = function (styleName) {
  var s = new fc.shadowStyle(styleName);
  this.addNode(s);
  return s;
};

fc.styleDefinitions.prototype.defineGlowStyle = function (styleName) {
  var s = new fc.glowStyle(styleName);
  this.addNode(s);
  return s;
};

fc.styleDefinitions.prototype.defineBevelStyle = function (styleName) {
  var s = new fc.bevelStyle(styleName);
  this.addNode(s);
  return s;
};

fc.styleDefinitions.prototype.defineBlurStyle = function (styleName) {
  var s = new fc.blurStyle(styleName);
  this.addNode(s);
  return s;
};

fc.styleDefinitions.prototype.defineFontStyle = function (styleName) {
  var s = new fc.fontStyle(styleName);
  this.addNode(s);
  return s;
};