fc.dataset = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'dataset', attributes, childNodes);

  var PARAMETER_SERIESNAME = "seriesName";
  var PARAMETER_SHOWVALUES = "showValues";
  var PARAMETER_COLOR = "color";
  var PARAMETER_INCLUDEINLEGEND = "includeInLegend";
  var PARAMETER_ALPHA = "alpha";

  self.setSeriesName = function (value) {
    self.setAttribute(PARAMETER_SERIESNAME, value);
  };

  self.setShowValues = function (value) {
    self.setAttribute(PARAMETER_SHOWVALUES, value);
  };

  self.setColor = function (value) {
    self.setAttribute(PARAMETER_COLOR, value);
  };

  self.setIncludeInLegend = function (value) {
    self.setAttribute(PARAMETER_INCLUDEINLEGEND, value);
  };

  self.setAlpha = function (value) {
    self.setAttribute(PARAMETER_ALPHA, value);
  };
};

fc.dataset.prototype = fc.utils.extend(fc.node);