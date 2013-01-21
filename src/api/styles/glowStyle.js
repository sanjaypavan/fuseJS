fc.style.glowStyle = function (styleName) {
  var self = this;
  fc.style.tyle.call(self, styleName, 'glow');
};

fc.style.glowStyle.prototype = fc.utils.extend(fc.style.style);

(function () {
  var parameterList = ['color', 'alpha', 'blurX', 'blurY', 'strength', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.style.glowStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();