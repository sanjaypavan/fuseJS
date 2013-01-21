fc.Set = function (attributes, childnodes) {
  var self = this;
  fc.Node.call(self, 'set', attributes, childnodes);
};

fc.Set.prototype = fc.utils.extend(fc.Node);

(function () {
  var parameterList = ['toolText', 'link'];

  $.each(parameterList, function (index, parameter) {
    fc.Set.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();