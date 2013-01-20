fc.VLine = function (attributes, childNodes) {
  var self = this;
  fc.Node.call(self, 'vLine', attributes, childNodes);
};

fc.VLine.prototype = fc.utils.extend(fc.Node);

(function () {
  var parameterList = ['dashLen', 'dashGap', 'thickness', 'dashed', 'alpha'];

  $.each(parameterList, function (index, parameter) {
    fc.VLine.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();