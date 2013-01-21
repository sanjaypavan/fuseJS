fc.Dataset = function (attributes, childNodes) {
  var self = this;
  fc.Node.call(self, 'dataset', attributes, childNodes);
};

fc.Dataset.prototype = fc.utils.extend(fc.Node);

(function () {
  var parameterList = ['seriesName', 'showValues', 'color', 'includeInLegend', 'alpha'];

  $.each(parameterList, function (index, parameter) {
    fc.Dataset.prototype['set' + fc.utils.getPascalCasedName(parameter)] = function (value) {
      return this.setAttribute(parameter, value);
    };
  });
})();