fc.Line = function (attributes, childNodes) {
  var self = this;
  fc.Node.call(self, 'line', attributes, childNodes);
};

fc.Line.prototype = fc.utils.extend(fc.Node);

(function () {
  var parameterList = ['dashLen', 'isTrendZone', 'dashGap', 'thickness', 'color', 'endValue', 'dashed',
    'startValue', 'displayValue', 'alpha'];

  $.each(parameterList, function (index, parameter) {
    fc.Line.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();