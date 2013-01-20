fc.Categories = function (attributes, childNodes) {
  var self = this;
  fc.Node.call(self, 'categories', attributes, childNodes);
};

fc.Categories.prototype = fc.utils.extend(fc.Node);

(function () {
  var parameterList = ['fontColor', 'fontSize', 'font'];

  $.each(parameterList, function (index, parameter) {
    fc.Categories.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();