fc.categories = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'categories', attributes, childNodes);

  var PARAMETER_FONTCOLOR = "fontColor";
  var PARAMETER_FONTSIZE = "fontSize";
  var PARAMETER_FONT = "font";

  self.setFontColor = function (value) {
    self.setAttribute(PARAMETER_FONTCOLOR, value);
  };

  self.setFontSize = function (value) {
    self.setAttribute(PARAMETER_FONTSIZE, value);
  };

  self.setFont = function (value) {
    self.setAttribute(PARAMETER_FONT, value);
  };
};

fc.categories.prototype = fc.utils.extend(fc.node);