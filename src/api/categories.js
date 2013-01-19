fc.categories = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'categories', attributes, childNodes);
};

fc.categories.prototype = fc.utils.extend(fc.node);

(function () {
  var parameterList = ['fontColor', 'fontSize', 'font'];

  $.each(parameterList, function (index, parameter) {
    fc.categories.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();