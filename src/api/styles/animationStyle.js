fc.animationStyle = function (styleName) {
  var self = this;
  fc.style.call(self, styleName, 'animation');
};

fc.animationStyle.prototype = fc.utils.extend(fc.style);

fc.animationStyle.prototype.setParam = function (value) {
  return this.setAttribute('param', value);
};

fc.animationStyle.prototype.setParamToX = function () {
  return this.setParam('_x');
};

fc.animationStyle.prototype.setParamToY = function () {
  return this.setParam('_y');
};

fc.animationStyle.prototype.setParamToXScale = function () {
  return this.setParam('_xScale');
};

fc.animationStyle.prototype.setParamToYScale = function () {
  return this.setParam('_yScale');
};

fc.animationStyle.prototype.setParamToAlpha = function () {
  return this.setParam('_alpha');
};

fc.animationStyle.prototype.setParamToRotation = function () {
  return this.setParam('_rotation');
};

fc.animationStyle.prototype.setStart = function (value) {
  return this.setAttribute('start', value);
};

fc.animationStyle.prototype.setDuration = function (value) {
  return this.setAttribute('duration', value);
};

fc.animationStyle.prototype.setEasing = function (value) {
  return this.setAttribute('easing', value);
};

fc.animationStyle.prototype.setEasingToBound = function () {
  return this.setEasing('bounce');
};

fc.animationStyle.prototype.setEasingToRegular = function () {
  return this.setEasing('regular');
};

fc.animationStyle.prototype.setEasingToStrong = function () {
  return this.setEasing('strong');
};

fc.animationStyle.prototype.setEasingToNone = function () {
  return this.setEasing('none');
};