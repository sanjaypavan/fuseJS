fc.set = function (attributes, childnodes) {
  var self = this;
  fc.node.call(self, 'set', attributes, childnodes);
};

fc.set.prototype = fc.utils.extend(fc.node);

(function () {
  var parameterList = ['toolText', 'link'];

  $.each(parameterList, function (index, parameter) {
    fc.set.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();