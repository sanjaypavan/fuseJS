fc.style.animationStyle = function (styleName) {
  var self = this;
  fc.style.style.call(self, styleName, 'animation');
};

fc.style.animationStyle.prototype = fc.utils.extend(fc.style.style);

fc.style.animationStyle.prototype.setParam = function (value) {
  return this.setAttribute('param', value);
};

fc.style.animationStyle.prototype.setParamToX = function () {
  return this.setParam('_x');
};

fc.style.animationStyle.prototype.setParamToY = function () {
  return this.setParam('_y');
};

fc.style.animationStyle.prototype.setParamToXScale = function () {
  return this.setParam('_xScale');
};

fc.style.animationStyle.prototype.setParamToYScale = function () {
  return this.setParam('_yScale');
};

fc.style.animationStyle.prototype.setParamToAlpha = function () {
  return this.setParam('_alpha');
};

fc.style.animationStyle.prototype.setParamToRotation = function () {
  return this.setParam('_rotation');
};

fc.style.animationStyle.prototype.setStart = function (value) {
  return this.setAttribute('start', value);
};

fc.style.animationStyle.prototype.setDuration = function (value) {
  return this.setAttribute('duration', value);
};

fc.style.animationStyle.prototype.setEasing = function (value) {
  return this.setAttribute('easing', value);
};

fc.style.animationStyle.prototype.setEasingToBound = function () {
  return this.setEasing('bounce');
};

fc.style.animationStyle.prototype.setEasingToRegular = function () {
  return this.setEasing('regular');
};

fc.style.animationStyle.prototype.setEasingToStrong = function () {
  return this.setEasing('strong');
};

fc.style.animationStyle.prototype.setEasingToNone = function () {
  return this.setEasing('none');
};