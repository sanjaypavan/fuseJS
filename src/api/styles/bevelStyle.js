fc.bevelStyle = function (styleName) {
  var self = this;
  fc.style.call(self, styleName, 'bevel');
};

fc.bevelStyle.prototype = fc.utils.extend(fc.style);

(function () {
  var parameterList = ['distance', 'angle', 'shadowColor', 'shadowAlpha', 'highlightColor', 'highlightAlpha',
    'blurX', 'blurY', 'strength', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.bevelStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();