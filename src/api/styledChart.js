fc.styledChart = function (name, attributes, childNodes) {
  var self = this;
  fc.node.call(self, name, attributes, childNodes);

  self.styles = undefined;  
};

fc.styledChart.prototype = fc.utils.extend(fc.node);

fc.styledChart.prototype.createStyles = function () {
  var self = this;
  if(self.styles === undefined) {
    self.styles = new fc.styles();
    self.addNode(self.styles);
  }
  return self.styles;
};

fc.styledChart.prototype.getStyles = function () {
  return this.styles;
};

fc.styledChart.prototype.defineAnimationStyle = function (styleName) {
  return this.styles.getDefinitions().defineAnimationStyle(styleName);
};

fc.styledChart.prototype.defineGlowStyle = function (styleName) {
  return this.styles.getDefinitions().defineGlowStyle(styleName);
};

fc.styledChart.prototype.defineShadowStyle = function (styleName) {
  return this.styles.getDefinitions().defineShadowStyle(styleName);
};

fc.styledChart.prototype.defineBevelStyle = function (styleName) {
  return this.styles.getDefinitions().defineBevelStyle(styleName);
};

fc.styledChart.prototype.defineBlurStyle = function (styleName) {
  return this.styles.getDefinitions().defineBlurStyle(styleName);
};

fc.styledChart.prototype.defineFontStyle = function (styleName) {
  return this.styles.getDefinitions().defineFontStyle(styleName);
};

fc.styledChart.prototype.applyStylesToObject = function (toObject, styles) {
  this.styles.getApplications().applyStyles(toObject, styles);
};