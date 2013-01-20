fc.Category = function (attributes, childNodes) {
  var self = this;
  fc.Node.call(self, 'category', attributes, childNodes);
};

fc.Category.prototype = fc.utils.extend(fc.Node);

(function () {
  var parameterList = ['label', 'toolText', 'showLabel'];

  $.each(parameterList, function (index, parameter) {
    fc.Category.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();