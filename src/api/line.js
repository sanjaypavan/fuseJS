fc.line = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'line', attributes, childNodes);
};

fc.line.prototype = fc.utils.extend(fc.node);

(function () {
  var parameterList = ['dashLen', 'isTrendZone', 'dashGap', 'thickness', 'color', 'endValue', 'dashed',
    'startValue', 'displayValue', 'alpha'];

  $.each(parameterList, function (index, parameter) {
    fc.line.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();