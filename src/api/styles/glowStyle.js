fc.glowStyle = function (styleName) {
  var self = this;
  fc.style.call(self, styleName, 'glow');
};

fc.glowStyle.prototype = fc.utils.extend(fc.style);

(function () {
  var parameterList = ['color', 'alpha', 'blurX', 'blurY', 'strength', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.glowStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();