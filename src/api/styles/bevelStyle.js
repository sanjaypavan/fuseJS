fc.style.bevelStyle = function (styleName) {
  var self = this;
  fc.style.style.call(self, styleName, 'bevel');
};

fc.style.bevelStyle.prototype = fc.utils.extend(fc.style.style);

(function () {
  var parameterList = ['distance', 'angle', 'shadowColor', 'shadowAlpha', 'highlightColor', 'highlightAlpha',
    'blurX', 'blurY', 'strength', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.style.bevelStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();