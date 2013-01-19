fc.vline = function (attributes, childNodes) {
  var self = this;
  fc.node.call(self, 'vLine', attributes, childNodes);

  var PARAMETER_DASHLEN = "dashLen";
  var PARAMETER_DASHGAP = "dashGap";
  var PARAMETER_THICKNESS = "thickness";
  var PARAMETER_DASHED = "dashed";
  var PARAMETER_ALPHA = "alpha";

  this.setDashLen = function (value) {
    self.setAttribute(PARAMETER_DASHLEN, value);
    return self;
  };

  this.setDashGap = function (value) {
    self.setAttribute(PARAMETER_DASHGAP, value);
    return self;
  };

  this.setThickness = function (value) {
    self.setAttribute(PARAMETER_THICKNESS, value);
    return self;
  };

  this.setDashed = function (value) {
    self.setAttribute(PARAMETER_DASHED, value);
    return self;
  };

  this.setAlpha = function (value) {
    self.setAttribute(PARAMETER_ALPHA, value);
    return self;
  };
};

fc.vline.prototype = fc.utils.extend(fc.node);