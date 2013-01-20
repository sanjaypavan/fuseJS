fc.style.styleDefinitions = function () {
  var self = this;
  fc.Node.call(self, 'definition');  
};

fc.style.styleDefinitions.prototype = fc.utils.extend(fc.Node);

fc.style.styleDefinitions.prototype.defineAnimationStyle = function (styleName) {
  var s = new fc.style.animationStyle(styleName);
  this.addNode(s);
  return s;
};

fc.style.styleDefinitions.prototype.defineShadowStyle = function (styleName) {
  var s = new fc.style.shadowStyle(styleName);
  this.addNode(s);
  return s;
};

fc.style.styleDefinitions.prototype.defineGlowStyle = function (styleName) {
  var s = new fc.style.glowStyle(styleName);
  this.addNode(s);
  return s;
};

fc.style.styleDefinitions.prototype.defineBevelStyle = function (styleName) {
  var s = new fc.style.bevelStyle(styleName);
  this.addNode(s);
  return s;
};

fc.style.styleDefinitions.prototype.defineBlurStyle = function (styleName) {
  var s = new fc.style.blurStyle(styleName);
  this.addNode(s);
  return s;
};

fc.style.styleDefinitions.prototype.defineFontStyle = function (styleName) {
  var s = new fc.style.fontStyle(styleName);
  this.addNode(s);
  return s;
};