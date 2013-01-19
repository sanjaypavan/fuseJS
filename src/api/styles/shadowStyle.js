fc.shadowStyle = function (styleName) {
  var self = this;
  fc.style.call(self, styleName, 'shadow');
};

fc.shadowStyle.prototype = fc.utils.extend(fc.style);

(function () {
  var parameterList = ['distance', 'angle', 'color', 'alpha', 'blurX', 'blurY', 'strength', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.shadowStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();