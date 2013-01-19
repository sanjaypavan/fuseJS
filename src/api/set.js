fc.set = function (attributes, childnodes) {
  var self = this;
  fc.node.call(self, 'set', attributes, childnodes);

  var PARAMETER_TOOLTEXT = "toolText";
  var PARAMETER_LINK = "link";

  //Priviledged functions, having access to private variables inside the function
  this.setToolText = function (text) {
    self.setAttribute(PARAMETER_TOOLTEXT, text);
    return self;
  };

  this.setLink = function (link) {
    self.setAttribute(PARAMETER_LINK, link);
    return self;
  };
};

fc.set.prototype = fc.utils.extend(fc.node);