fc.dataset = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'dataset', attributes, childNodes);
};

fc.dataset.prototype = fc.utils.extend(fc.node);

(function () {
  var parameterList = ['seriesName', 'showValues', 'color', 'includeInLegend', 'alpha'];

  $.each(parameterList, function (index, parameter) {
    fc.dataset.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();