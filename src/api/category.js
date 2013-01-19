fc.category = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'category', attributes, childNodes);

  var PARAMETER_LABEL = "label";
  var PARAMETER_TOOLTEXT = "toolText";
  var PARAMETER_SHOWLABEL = "showLabel";

  self.setLabel = function (value) {
    self.setAttribute(PARAMETER_LABEL, value);
  };

  self.setToolText = function (value) {
    self.setAttribute(PARAMETER_SHOWLABEL, value);
  };

  self.setShowLabel = function (value) {
    self.setAttribute(PARAMETER_SHOWLABEL, value);
  };
};

fc.category.prototype = fc.utils.extend(fc.node);