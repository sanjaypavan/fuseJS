fc.style.shadowStyle = function (styleName) {
  var self = this;
  fc.style.style.call(self, styleName, 'shadow');
};

fc.style.shadowStyle.prototype = fc.utils.extend(fc.style.style);

(function () {
  var parameterList = ['distance', 'angle', 'color', 'alpha', 'blurX', 'blurY', 'strength', 'quality'];

  $.each(parameterList, function(index, parameter) {
    fc.style.shadowStyle.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
}) ();