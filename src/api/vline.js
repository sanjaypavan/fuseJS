fc.vline = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'vLine', attributes, childNodes);
};

fc.vline.prototype = fc.utils.extend(fc.node);

(function () {
  var parameterList = ['dashLen', 'dashGap', 'thickness', 'dashed', 'alpha'];

  $.each(parameterList, function (index, parameter) {
    fc.vline.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();