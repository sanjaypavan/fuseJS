fc.StyledChart = function (name, attributes, childNodes) {
  var self = this;
  fc.Node.call(self, name, attributes, childNodes);

  self.styles = undefined;  
};

fc.StyledChart.prototype = fc.utils.extend(fc.Node);

fc.StyledChart.prototype.createStyles = function () {
  var self = this;
  if(self.styles === undefined) {
    self.styles = new fc.styles();
    self.addNode(self.styles);
  }
  return self.styles;
};

fc.StyledChart.prototype.getStyles = function () {
  return this.styles;
};

fc.StyledChart.prototype.defineAnimationStyle = function (styleName) {
  return this.styles.getDefinitions().defineAnimationStyle(styleName);
};

fc.StyledChart.prototype.defineGlowStyle = function (styleName) {
  return this.styles.getDefinitions().defineGlowStyle(styleName);
};

fc.StyledChart.prototype.defineShadowStyle = function (styleName) {
  return this.styles.getDefinitions().defineShadowStyle(styleName);
};

fc.StyledChart.prototype.defineBevelStyle = function (styleName) {
  return this.styles.getDefinitions().defineBevelStyle(styleName);
};

fc.StyledChart.prototype.defineBlurStyle = function (styleName) {
  return this.styles.getDefinitions().defineBlurStyle(styleName);
};

fc.StyledChart.prototype.defineFontStyle = function (styleName) {
  return this.styles.getDefinitions().defineFontStyle(styleName);
};

fc.StyledChart.prototype.applyStylesToObject = function (toObject, styles) {
  this.styles.getApplications().applyStyles(toObject, styles);
};