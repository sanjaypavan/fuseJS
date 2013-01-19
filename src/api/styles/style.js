fc.style = function (styleName, type) {
  var self = this;
  fc.node.call(self, "style");

  var PARAMETER_NAME = "name";
  var PARAMETER_TYPE = "type";

  self.setAttribute(PARAMETER_NAME, styleName);
  self.setAttribute(PARAMETER_TYPE, type);
};

fc.style.prototype = fc.utils.extend(fc.node);