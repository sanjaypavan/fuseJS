fc.category = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'category', attributes, childNodes);
};

fc.category.prototype = fc.utils.extend(fc.node);

(function () {
  var parameterList = ['label', 'toolText', 'showLabel'];

  $.each(parameterList, function (index, parameter) {
    fc.category.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();